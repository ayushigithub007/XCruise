#!/bin/sh
# Exit script on error
set -e

# Read the first line starting with https from submit.txt
USER_LINK_SUBMISSION="http://$(curl -sL http://checkip.amazonaws.com):8081')"

# Replace any URL with $USER_LINK_SUBMISSION in spec.cy.js
sed -i "s#http://[^ ]*#$USER_LINK_SUBMISSION#g" assessment/cypress/e2e/spec.cy.js

# Check if USER_LINK_SUBMISSION is non-empty
if [ -z "$USER_LINK_SUBMISSION" ]; then
    echo "No URL found in submit.txt"
    exit 1
fi

cd assessment
echo "Removing Node Modules"
rm -rf node_modules
# Update or create .env with USER_LINK_SUBMISSION
# echo "USER_LINK_SUBMISSION=$USER_LINK_SUBMISSION" > .env

# Check if dotenv is installed, otherwise install it
#if npm list dotenv | grep -q 'dotenv'; then
#    echo "dotenv is already installed."
#else
#    echo "Installing dotenv..."
#    npm install dotenv > /dev/null 2>&1 &
#fi

echo "Doing npm install"
npm install

echo "Running Cypress Tests"
node runCypress.js

# Run Python script
python3 process_filtered_logs.py cypressResults.json

# Check if assessment_result.json exists
if [ -f "assessment_result.json" ]; then
    cp assessment_result.json ..
    echo "Assessment results generated"
else
    echo "Python script failed!!!"
fi

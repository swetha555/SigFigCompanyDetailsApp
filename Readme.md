# SigFig take home test instructions

## Step 0 - pre reqs
If you don't already have them, install brew, git, node & npm. On OSX the commands below should work.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor #fix all issues
brew update
brew install node
brew install git
```

## Step 1 - install rest server code
```
git clone ....
npm install
```

## Step 2 - install mongodb
``` brew install mongodb ```

## Step 3 - run server
From your project folder run the following
```
mongod --dbpath data/db
npm run server
```

## Step 4 - Confirm it works, do the test
Go to http://localhost:3001/testCode/index.html . You should see the full instructions on building the app there.


## Step 6 - submit your solution
submit your entire testCode directory, and anything else you've built as a zip file back to your recruiter.

## questions/troubleshooting setup issues
Ping you're recruiter and they'll help you get it working

# TCSE2017 Website

## Requirements
- [Node](https://nodejs.org) 4.0 or newer

## Installation
Install npm global [Bower](http://bower.io/) package
```sh
npm install -g bower
```
After cloning the repository, install dependencies
```sh
cd <project folder>/tcse2016
npm install
bower install
```
## Running
Run your local server:
```sh
npm start
```
Server is located at http://localhost:9000.  
- The website should be automatically open when you run the command.
- Reload page automatically when files are changed.

## Build
Generate website in `/build` directory
```sh
npm run release
```

## Deploy
Commit the **master** branch and push to github.
```sh
git add .
git commit -m "<commit message>"
git push
```
After push to github, github would trigger the CI to build the project and deploy to test environment.

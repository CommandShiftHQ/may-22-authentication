# Authorisation and Authentication demo for FE module - May 22

## Please note!
This repo contains the code written during the lecture itself. If you would like to follow along with the recording, you can clone down the source repo (which can be found [here](https://github.com/MCRcodes/auth-example-lecture-1.1)) and checkout the `start` branch.

Here we will solve the problems of:
- authenticating a user,
- having to re-authenticate when refreshing the page / leaving and returning to the site through the use of cookies
- using bcryptjs to encrypt the password and ensure better security

The desired behaviour is for the user to be shown the `account` page when they are logged in, otherwise they should be redirected to the `login` component when trying clicking the `account` link.
At this starting point, this behaviour is hard-coded as the app has no knowledge of the authenticated status of the user (as it hasn't been created yet!)

The app does not use a back end for authentication, for the purposes of demonstrating the mechanics and workflow a fake login process is used which will mimic the response of a real API (in the case of JWT, by returning an an authentication token). See `utils/fakeLogin.js`

## Packages used
- dotenv
- jsonwebtoken
- jwt-decode
- js-cookie
- react test renderer
- bcryptjs

## Installation and checking out branches

### Installation
- Clone down this repo and run `npm install`. You will also need to create a `.env` file at the root of the project and enter a value for `REACT_APP_KEY` (this can be any string).

## Available scripts
- `npm start`
- `npm test`

# SumoChickn

> Challenge the World.

## Team

  - __Product Owner__: Hamzah Chaudhary
  - __Scrum Master__: Michael Cheung
  - __Development Team Member (Minion)__: Steffen Baumgarten

## Table of Contents

1. [Usage](#Usage)
1. [Dependencies](#dependencies)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Project Information](#project-details)
      1. [Authentication/Authorization](#authentication/authorization)
      1. [Client Design](#client-design)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

1. Log in with Facebook
2. Create and send a challenge on the Create Challenge view.
3. View your own challenges on the My Challenges view.
4. Take on challenges sent to you and take a picture of yourself attempting it.
5. Vote on the validity of other people's challenge attempts on the Proof view.
6. If the validity of your challenge has been decided by votes, check out the Leaderboard view to see your changes in points.

##Dependencies

###Client-Side
- react-native 0.22.0
- react-native-dropdown 0.0.6
- react-native-router-flux 3.1.3
- react-native-uploader 0.0.9
- react-native-scrollable-tab-view 0.4.0
- react-facebook-login 1.0.3
- react-redux 3.3.1
- redux 3.3.1
- redux-thunk 2.0.1
- immutable 3.7.6
- isomorphic fetch 2.2.1
- node-xml2json 1.0.0
- react-native-camera git+https://github.com/lwansbrough/react-native-camera.git

## Development

##Installing Dependencies

Navigate to the root directory:

```sh
npm install
```

### Project Information

#### Authentication/Authorization

Authentication is implemented with an npm module for React Native called react-facebook-login. The module
provides a React native component that wraps the Facebook SDK login button. When triggered, the component
will ask for the user's facebook login information and when the user is authenticated, they will be
authorized to use the application. The user's facebook name will be saved into a mySQL database as a user.

#### Client Design

The Front-end was built with four(4) scenes using react-native-flux-router. The scenes are:

| TYPE      | KEY                   | COMPONENT           | INITIAL      |
|:---------:|:---------------------:|:-------------------:|:------------:|
| replace   | signUp                | LoginAuth           | TRUE         | 
| replace   | myChallenges          | myChallenges        | FALSE        | 
| replace   | createChallenges      | SendChallenges      | FALSE        | 
| replace   | camera                | CameraConnect       | FALSE        | 

















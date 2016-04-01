# SumoChickn

> Challenge the World.

## Team

  - __Product Owner__: Hamzah Chaudhary
  - __Scrum Master__: Michael Cheung
  - __Development Team Member (Minion)__: Steffen Baumgarten

## Table of Contents

1. [Usage](#Usage)
2. [Dependencies](#dependencies)
3. [Development](#development)
    i. [Installing Dependencies](#installing-dependencies)
    ii. [Project Details](#project-details)
      a. [Authentication](#authentication)
      b. [Server Design](#server-design)
      c. [Database Design](#database-design)
      d. [Client Design](#client-design)
11. [Team](#team)
12. [Contributing](#contributing)

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

###Server-Side
- express 4.13.4
- morgan 1.7.0
- mysql 2.10.2
- sequelize 3.20.0
- body-parser 1.15.0

## Development

##Installing Dependencies

Navigate to the root directory:

```sh
npm install
```

### Project Details
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
NestJS Chat App 🚀 This powerful chat application, built with NestJS, brings a seamless blend of user authentication, CRUD functionality, and real-time chat features. Dive into a secure and efficient user experience with JWT-powered login, robust CRUD operations, and a dynamic WebSocket-driven chat system.

## Installation

First of all, you need to clone this repository to your local mechine, and run npm install, its should be work, dont worry its just install node dependecy in the app in order the app run in your local.

```bash
$ npm install
```

## Env file

Secondly,configure the env file, in order the app run in each different local mechine, its necessery to create the env file. first, mongo_uri can be found in your local database, typically take the form of mongodb://localhost:27017/ , where is the name of the database you want to connect to. second,jwt_access_secret and jwt_refresh_secret can manually add, you can get one or generate one form https://www.javainuse.com/jwtgenerator this website. third is port, this is your localhost port usually by default is 3000, fourth is rabbitMq configuration, so in order the notification you must configure this, user and password is your secret credintional, but by default is guest guest, the host is by default is localhost:5672, and last is queue name, you must created it first in rabbitMq in order it run.

```
MONGO_URI = ''
JWT_ACCESS_SECRET = ''
JWT_REFRESH_SECRET = ''
PORT = ''

RABBITMQ_USER=''
RABBITMQ_PASSWORD=''
RABBITMQ_HOST=''
RABBITMQ_QUEUE_NAME=''
```

## Running the app

Third is running the app, after all above stuff is done, now finally you can running the app by run npm run start in console, dont forget you must in your dir to make it run like cd yourDir/

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Finally the last is the test, im not too confident with this one, its still throw some error so its still need some work in order passed the all test.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Additional info

the registration data is like below, so in order to chat or do other stuff you need to login or register via jwt auth,

```
{
    "username": "yourUsername",
    "email": "yourEmail@example.com",
    "password": "yourPassword"
}
```

and for creating profile you can use,

```
{
   "name": "string",
   "gender": "string",
   "birthday": "string",
   "horoscope": "string",
   "zodiac": "string",
   "height": "string",
   "weight": "string"
}

```

and for chat you can use,

```
{
    "message": "yourMassage",
    "user": "userId in your database"
}
```

routes all exist,

/api/createProfile
/api/getProfile
/api/updateProfile
for profile

/api/viewMessages
/api/sendMessage
for chat

/api/register/
/api/login/
for auth user

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

Thanks.

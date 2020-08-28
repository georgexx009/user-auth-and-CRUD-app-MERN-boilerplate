## About

Boilerplate with MERN Stack + Redux + JWT for registration, login and authentication of users with CRUD operations for users posts.

## Introduction

This boilerplate can be used as the basis for an application that needs to authenticate, register and log in users. For the authentication process, it uses a JSON Web Token that validates the user before performing certain operations.

In addition, it shows as an example CRUD operations for posts that relate to each user. Only the posts of the logged user can be modified.

The application uses custom hooks that make it easier to change the logic of the application and allow everyone customize it for their own needs.

## Just want it to try it?

The application is stored at [https://georgexx009.herokuapp.com/](https://georgexx009.herokuapp.com/#/) . Feel free to try it out.

To test it on your own computer:

- Add your mongodb uri in .env file in the server directory.
- Run **npm install**
- Go to the server directory (server side). Run **npm run dev**
- In the root (another tab), (client side) run **npm run dev**

## Overview from app structure

The client side is made with React.js. Lets you divide the page into components and seperate the logic from the view. To centralize the data, it uses Redux. It might be a bit difficult to understand at first, but once you get it, you will see the full benefits from of it. To manage the different routes, it uses React Router.

The server side is really simple. It is made in Node.js with Express. For communicate with the Database, it uses Mongoose as MongoDB Object Modeling. 

The Database is a MongoDB. You could use it locally or in the cloud, you just need the mongo URI. I want to clarify that I do not recommend using Mongo as Database if you project has many relationships. This one is really simple because it only manages users who owns posts. In other cases, use a relational Database (PostgreSQL project comming soon).

## Client side - How it works

First, create your own environmental file with your Prod API URL. An example is already provided and webpack is already configured to consume an .env file.

For testing, Jest is already configured. Just add a file ending with .test.js to create a test for your different modules.

The componentsV2 directory is divided into two types of components, containers and UI (presentational).  I tried to separate most of the main logic from the components and set it on custom hooks. In that way, everyone could consume those hooks into their own components.

Warning! Those custom hooks dispatch many Redux actions as they modify data in the store.

The services directory holds all the JS modules that handle the API calls. I could say that this could be also implemented within Redux Middleware, but I prefer it this way for better debugging. 

## Server side - How it works

As on the client, create your own environmental file with the mongo URI of your database.

The server application is really simple. The routers directory manages the routers (I know hahah), there we only set the paths and import the middleware functions that are stored in the middleware directory. The middleware functions manage the logic of the operations and use the controllers to interact with the database.

In the database directory we set the models for our mongo documents. Here, the database configuration is also set.

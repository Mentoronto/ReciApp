# Growceries
This app allows the user to create an account and have a list of recipes to choose from that they can save. Each recipe shows the ingredients and a tutorial link to the website and/or Youtube link on how to cook that following meal. The user can also save any meals that they like and delete any meals that they dont.
There is also a daily random meal generated to give the user a new meal that they can attempt to make as a way to keep the ooking at home fresh.

### Overview
- This Project is a Nextjs App paired with MongoDB and the Redux toolkit.
- This app uses an external Api that stores users name,email and passwords(which are hashed passwords) associated with their account 


# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Technologies
- HTML,SCSS
- Axios
- Redux
- mongoose
- React Hooks
- Next-Auth
- Toastify

## Packages and Libraries

The following npm packages and libraries have been used

|Package        |Info           |
| ------------- |:-------------:|
| next| A React framework built ontop of Node.js enabling React based web-app functionalities such as server-side rendering & generating static sites.  |
| next-auth    | NextAuth.js is a complete open-source authentication solution for Next.js applications. It is used in this project for email/passwordless authentication  |
| @next-auth/mongodb-adapter| Connects your app to teh database/ backend system of anything you want to use to store data for users,seesions,etc.    |
| @reduxjs/toolkit | The Redux Toolkit package is intended to be the standard way to write Redux logic     |
| react-redux | Official React UI bindings layer for Redux. Allows React components to read data from a Redux store,dispatch actions to the store and update state.   |
| redux | A state container for Javascript applications      |
| axios | Promise based HTTP client for the browser and node.js     |
| bcryptjs|  This module enables storing of passwords as hashed passwords instead of plaintext.     |
| js-cookie | JavaScript API for handling browser cookies     |
| nookies | A collection of cookie helpers for Next.js     |
|jsonwebtoken| an open standard for securely transferring data within parties using a JSON object     |
| mongoose | Is a ODM library for MongoDB     |
|react | JavaScript library for building user interfaces    |
| react-dom | Package that provides DOM-specific methods for React    |
| react-toastify | React library that helps to add beautifully crafted custom notifications to react project.   |
| validator | A library that validates strings only   |



### LIVE VERSION
[Checkout the apps live version](https://recipe-app-mentor.vercel.app/)


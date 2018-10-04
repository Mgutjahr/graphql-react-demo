# GraphQL Sample Project for RedBull Content API
This is a small demo application that shows how to use GraphQL to fetch data from the content repository. 
The applications shows upcoming and past events from redbull.com. An event-detail pages shows in addition 
recommended content for a specific event. 

The app war created using `create-react-app`, `apollo client` and `react-router`.

In this demo application you will lear: 
- How to use apollo client in react projects
- How to make use of variables in GraphQL queries 
- How to use GraphQL fragments and use them in components

## Get started
Start by installing all dependencies by executing
```sh
npm install
```

Next, make sure to insert API credentials for the content repository API in the file `src/components/AppComponents/index.js`

Change this line here: 
```js
const GRAPHQL_API_KEY = '<INSERT_API_KEY>'
```

You should now be able to start the application by running: 
```sh
npm run start
```
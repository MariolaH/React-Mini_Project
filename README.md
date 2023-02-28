# Reacting to React Project

This project was created with the intention to learn React Basics.

### Additionally, it has been littered with bugs and is intended to allow you to:
1. Read error messages to track down the error at hand.
2. Follow the general structure of a React project that includes the npm packages axios and react-router-dom.
3. See / Learn how to use the react-router-dom package to navigate between pages.
4. See / Learn how to use the axios package to make API calls.
5. See / Learn how to read and write to the local storage.
6. See / Learn how to debug another developer's project. 

### There are various kinds of mistakes made throughout the app. 
1. The first problem is going to involve the index.js file. You will have a blank screen where you thought your app was going to be. Why?
2. From there use both the console (in the browser) and the terminal (in gitpod) to help debug your app. Starting at the top of the console with those errors will help you track down what is going on.

### Additional endpoint
When you finish, we've found (a new API)[http://hp-api.herokuapp.com/api/characters] to use to create a page for all the characters in the book. 

1. Create a new route for the App that routes to a /characters page.
2. Create a component for the Characters.
3. Rework the getData function to take a url as a parameter and update all the components to use the new data function.
4. The characters page should output at least 5 different characteristics in addition to their name.
5. The characters page should limit characters to only those that share a common property (think Array.filter and `ancestry === 'half-blood'` or `eyeColour === 'green'`)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/) or [React documentation](https://reactjs.org/).

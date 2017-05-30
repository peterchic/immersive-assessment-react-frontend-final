# React Immersive Code Challenge Final

## Instructions

For this project, you’ll be building out a React application that displays a list of your recent bank transactions.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

When you clone down this project, the component `<AccountContainer />` will have an initial default state.  Use this data to get the functionality of the app working.  Once that is complete, you can replace that initial state with data you fetch from [this provided API endpoint](https://boiling-brook-94902.herokuapp.com/transactions).


## Deliverables

**Please implement the following user stories:**
- As a user, you should be able to see a table of transactions.
- As a user, you should be able select a radio button that toggles the active category.
- You should only see transactions that match the active category or all transactions if "All" is selected


![example project](https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/react/react-assessment-example.gif)

Use the above gif as an example of how the app should function.


We’ve provided some starter code you can use to guide you, but feel free to create or remove components as you see fit.

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app have between 4 and 6 components and a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a search input that respond to changes and calls this.setState?
- **Lifecycle Methods & API:** Does the app make an AJAX request to the Rails API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of transactions?
- Does the app follow best practices regarding state and component composition?

If you have extra time, please incorporate PropTypes, a Show view, and React Router into your application.

## Setup
You can boot up the app with `npm start`. It will run on `localhost:3000`.

When you start the backend Rails server be sure to run it on a different port with the `-p` flag. For example `rails s -p 3001` would run the rails app on port `3001`.

Good luck!

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

/* 
1. Connect to the API URL (https://teamtreehouse.com/username.json)
2. Read the data
3. Parse the data
4. Print the data 
*/

const profile = require('./profile');

// getProfile('chalkers');
// const users = ['chalkers', 'davemcfarland'];
/* Command line arguments can be accessed through the argv property of process object
console.log(process.argv); */
const users = process.argv.slice(2);

/* since only one parameter, we can just put getProfile as a parameter
users.forEach(username => {
getProfile(username); 
});  
 */
users.forEach(profile.get);

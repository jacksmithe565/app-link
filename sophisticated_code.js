/* sophisticated_code.js */

// Complex code to generate a unique username based on user input

// Utility function to generate a random alphanumeric string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}

// Class representing a User
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  // Generate a unique username for the user
  generateUsername() {
    const username = `${this.firstName.charAt(0)}${this.lastName}${this.age}${generateRandomString(4)}`;
    return username.toLowerCase();
  }
}

// Function to collect user information and generate a unique username
function collectUserInfo() {
  const firstName = prompt('Enter your first name:');
  const lastName = prompt('Enter your last name:');
  const age = prompt('Enter your age:');
  
  const user = new User(firstName, lastName, age);
  const username = user.generateUsername();
  
  console.log(`Hello ${user.firstName} ${user.lastName} (${user.age})! Your unique username is ${username}.`);
}

// Entry point of the program
function main() {
  console.log('Welcome to the User Registration System!');
  
  const numOfUsers = parseInt(prompt('How many users do you want to register?'));
  
  for (let i = 0; i < numOfUsers; i++) {
    console.log(`User ${i+1}:`);
    collectUserInfo();
  }
}

// Execute the main function
main();
Note: The code provided here is just one possible example of sophisticated and complex code. Depending on the requirements, there are many other ways to create sophisticated JavaScript code, including using advanced algorithms, data structures, frameworks, or libraries.
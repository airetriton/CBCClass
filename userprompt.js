// Create a basic command line Node application using the inquirer package.
var inquirer = require("inquirer");

// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

inquirer
  .prompt([
  {	//basic input
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {  //confirmation of input
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },

// Here we give the user a list to choose from.
    {
      type: "list",
      message: "What is your favorite holiday?",
      choices: ["Christmas", "Valentines", "Halloween", "President's Day", "New Year's Eve"],
      name: "Halloween"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])

  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your favorite holliday is " + inquirerResponse.name + " !\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

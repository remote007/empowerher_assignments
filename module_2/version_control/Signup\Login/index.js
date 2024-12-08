//  Q12 part1
// Create a repo named Signup/Login clone this repo with your local system,
//  then create a file called index.js, then write function called signupthat 
// takes a string as paramter called userName, declare an array in the function with 
// some usernames already in that array, this function should return User Already Regsistered,
//  Please Login if the userName already present in the array or push the userName in to the 
// array and return Signup Sucessfull, Please Login,
// Once it is done, then add, commit and push into the repo.


function signup(userName){
    usernames = ['abc','nitu','shaam','gulaab'];
    for(let i = 0 ; i < userName.length ; i++)
       if(userName == usernames[i])
          return "User Already Regsistered, Please Login";
    usernames.push(userName);
    return "Signup Sucessfull, Please Login";
}

function login(userName, password){
    usernames = ['abc','nitu','shaam','gulaab'];
    for(let i = 0 ; i < userName.length ; i++)
        if(userName == usernames[i])
        {
            if(password=="Emp@123")
                return "Login Sucessfull...";
            else
                return "Wrong Password....";
        }
    return "User Not Found, Please Signup";
}
const prompt = require("prompt-sync")({ sigint: true });
let userName = prompt("Please enter username : ");
console.log(signup(userName));
let password = prompt("Please enter password : ");
console.log(login(userName,password));
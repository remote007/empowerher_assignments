function signup(userName){
    usernames = ['abc','nitu','shaam','gulaab'];
    for(let i = 0 ; i < userName.length ; i++)
       if(userName == usernames[i])
          return "User Already Regsistered, Please Login";
    usernames.push(userName);
    return "Signup Sucessfull, Please Login";
}
const prompt = require("prompt-sync")({ sigint: true });
let userName = prompt("Please enter username : ");
console.log(signup(userName));

var users = [
    {email:"elifsirin@gmail.com", password:"12345"},
    {email:"mervesirin@gmail.com", password:"admin"}
]

var tweets = [
    {email:"elifsirin@gmail.com", tweet:"Today is beatifull"},
    {email:"mervesirin@gmail.com", tweet:"So good!"}
]

var email = prompt("email?")
var password = prompt("password?")

function login(){
    if((email == users[0].email && password == users[0].password) || 
    (email == users[1].email && password == users[1].password)){
        console.log(tweets)
    }else{
        console.log("User's name or password is wrong! Please try again")
    }
}
login(email,password)
var users = [
	{id : 1 , name : "arsham" , password : 000000023},
	{id : 2 , name : "amin" , password : 1234},
	{id : 3 , name : "sheyda" , password : 5678},
	{id : 4 , name : "maryam" , password : 13831383},
]
var forgotpass = prompt("enter your username")
var result = users.find(function(user){
	return user.name === forgotpass
})
console.log(result)
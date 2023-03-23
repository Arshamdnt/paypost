var users = [
	{id : 1 , name : "arsham" , age :18},
	{id : 2 , name : "behzad" , age :25},
	{id : 3 , name : "dorsa" , age :19},
	{id : 4 , name : "zeynab" , age :20},
]
var finduser = users.find(function(users){
return users.name === "arsham"
})
console.log(finduser)
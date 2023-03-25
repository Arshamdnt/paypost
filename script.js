var userBirthDate = prompt('Enter Your Birth Date, Please: ', 1370)

// alert("Birth Date: " + userBirthDate)

// ali => 1384 | 1400 => ? | 1400 - 1384 = ?

var userAge = 1400 - userBirthDate

if (isNaN(userAge)) {
	alert("تاریخ تولد وارد شده معتبر نمی باشد")
} else {
	alert("Your Age Is: " + userAge)
}

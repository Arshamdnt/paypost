var minutes = prompt("Enter your time (minute): ", 0) // 60 => 1H


// 1h = 60m | 120 => 2H | 180 => 3H

var minutesToHours = minutes / 60

if (isNaN(minutesToHours)) {
	alert("عدد وارد شده معتبر نمی باشد")
} else {
	alert(minutesToHours + " Hours")
}

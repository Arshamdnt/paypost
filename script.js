i = 10

var time = setInterval(function(){
if (i === 0) {
    clearInterval(time)
    alert("game over")
}
    console.log(i)
i--
}
,1000)

console.log("Exercise 3 - Timer");
let plus = document.getElementById("add")
let minus = document.getElementById("sub")
let resetbtn = document.getElementById("reset")
let startbtn= document.getElementById("start")
let display= document.getElementById("time")

plus.addEventListener("click",function () {
    
    display.value++
});

minus.addEventListener("click",function () {
    if(display.value<0){
        display.value--
    }
    else{
        alert("time has to be greater than 0")
    }
});
startbtn.addEventListener("click",function (e) {
    startbtn.textContent="stop";    
    let timer = setInterval(() => {
        display.value--
        if (display.value === "0"){
            clearInterval(timer)            
        }

    }, 1000);
})
resetbtn.addEventListener("click", function () {
    display.value = 0
})
console.log("Exercise 3 - Timer");
let plus = document.getElementById("add")
let minus = document.getElementById("sub")
let resetbtn = document.getElementById("reset")
let startbtn= document.getElementById("start")
let display= document.getElementById("time")
let container = document.getElementById("contains")
container.addEventListener("click", function (e){
      if(e.target === plus){
        if (e.currentTarget === start){
            e.preventDefault()
        }
        display.value++;
      }
      if(e.target === minus){
        
        if(display.value>0){
           display.value--
            }
            else{
                alert("time has to be greater than 0")
            }
      }
      if(e.target === start){
          e.stopPropagation();
          startbtn.textContent="stop";    
          let timer = setInterval(() => {
              if (Number(display.value) <= 0){
                  clearInterval(timer)            
                }
                display.value--;
                
            }, 1000);
      }
      if(e.target === resetbtn){
        display.value=0
      }

})
// plus.addEventListener("click",function (event) {
//     if (e.currentTarget.id==="start" || display.value !== "0"){
//         event.preventDefault();
//     }
//     else{
//         display.value++
//     }
// });

// minus.addEventListener("click",function (event) {
//     if (e.currentTarget.id==="start" || display.value !== "0"){
//         event.preventDefault()
//     }
//     else{

//         if(display.value>0){
//             display.value--
//         }
//         else{
//             alert("time has to be greater than 0")
//         }
//     }
// });
// startbtn.addEventListener("click",function (e) {
//     startbtn.textContent="stop";    
//     let timer = setInterval(() => {
//         display.value--
//         if (display.value === "0"){
//             clearInterval(timer)            
//         }

//     }, 1000);
//     if (e.currentTarget.id="start"){
//         e.stopPropagation()
//     }
// })
// resetbtn.addEventListener("click", function (event) {
//     if (e.currentTarget.id==="start" || display.value !== "0"){
//         event.preventDefault()
//     }
//     else{

//         display.value = 0
//     }
// })

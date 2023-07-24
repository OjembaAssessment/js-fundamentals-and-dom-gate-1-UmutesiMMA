console.log("Exercise 1 - Word Highlighter");
let para = document.getElementById("myParagraph")
let arr = para.textContent.split(" ");
let arr2=[];
let fiveWords=[];
// let mostOccuring=[];
window.addEventListener("DOMContentLoaded", function(){
    var count=arr.reduce((acc, curr)=>{
        if(!acc[curr]){
            acc[curr]=0
        }
        acc[curr]++;
        return acc
    },{}) 
        
    // console.log(count)
    let arr2 = Object.entries(count).sort((a,b)=> b[1]-a[1])
    for(let j=1; j<6; j++){
        fiveWords.push(arr2[j][0])
    }
    console.log(fiveWords)
    let word = para.childNodes
    word.forEach((elt)=>{
        if(elt.nodeName === "#text"){
            let segment = elt
            console.log (segment)
            // highlight(elt)
        }
    })

    // function highlight(text){
    //     for
    // }
    
    // console.log(word)
    // Each entry!!
    // for (let i in arr2){
    //     console.log (arr2[i][0])        
    // }

    // for (let i in count){
    //     arr2.push(count[i])

    // }
    // console.log(arr2.sort((a,b) => b-a))
    // for (let j=1; j<6;j++){
    //     for(let prop of count){
    //         if(prop.value = j){
    //             console.log(prop)
    //         }        
    //     }
    // }
    

    



})
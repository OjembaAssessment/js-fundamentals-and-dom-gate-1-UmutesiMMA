console.log("Exercise 1 - Word Highlighter");
let para = document.getElementById("myParagraph")
let arr = para.textContent.split(" ");
let arr2=[];
let fiveWords=[];
let text=[];
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

    // let word = para.childNodes
    // word.forEach((elt)=>{
    //     if(elt.nodeName === "#text"){
    //         let segment = elt.textContent.split(" ")
        
    //         highlight(segment)
    //     }
        
    })

    // function highlight(text){
    //     for (let i =0; i<text.length;i++){
    //         if (fiveWords.includes(text[i])){
    //             console.log(text[i])
                
    //         }
    //     }
    // }
    
    

    



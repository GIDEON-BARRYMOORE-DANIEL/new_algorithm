//ECMA SCRIPT 
// let Arrays  = (x)=>{
//     return x
// }
// //Arrays()==1
// console.log(Arrays(1))
// return 
//given n array of [1,2,3,4,5,6,7,8,9]; find the odd number of each value of the array and return it in another empty array
// var array=[1,2,3,4,5,6,7,8,9]
// let odd=(arr)=>{
//     var neArr = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2===0){
//             neArr.push(element)
           
//         }   
//     }
//     return neArr
// }
// console.log(odd(array))
// return `the odd numner of the array is ${element}`

/// skip letters
// let skipletters = (val)=>{
//     var arr=[]
//     for (let index = 0; index < val.length; index++) {
//         if(index % 2===0){
//             arr.push(val[index])
//         }
//     }
//     console.log(arr)
// }
// skipletters("hello")
// skipletters("decagon")
// skipletters("decdevs")



const str= "Hello jackson please go back Hello please back Hello please go go go";
let checkWord = (word,wordcheck)=>{
    var checkwords=word.split(" ")
    var count =0
    //  console.log(checkwords)
    for (let index = 0; index < checkwords.length; index++) {
        const element = checkwords[index].includes(wordcheck);
        if(element==true){
            count++         
        }   
    }
    return count

}
console.log(checkWord(str,"go"))
console.log(checkWord(str,"Hello"))


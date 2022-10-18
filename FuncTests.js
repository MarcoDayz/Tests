// function sum(a,b) {
//     return a+b;
// };

// function sub(a,b){
//     return a-b
// };

// function greaterThanZero(num){
//     if(num > 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// module.exports = {
//     sum,
//     sub,
//     greaterThanZero
// };

function countVowels(str){
    let words = str.split(' ');
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let eachWord = words[i];
        let lastLetter = eachWord[eachWord.length -1];
        if(lastLetter === "a" || lastLetter === "A"){
            count++;
        }else if(lastLetter === "e" || lastLetter === "E"){
            count++;
        }else if(lastLetter === "i" || lastLetter === "I"){
            count++;
        }else if(lastLetter === "o" || lastLetter === "U"){
            count++;
        }else if(lastLetter === "u" || lastLetter === "U"){
            count++;
        }

    }
    return count;
}

// console.log(countVowels('I am a string i am a string'))
module.exports = countVowels;
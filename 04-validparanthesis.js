//Question
//You are given a string which contains the brackets
//You need to validate if the brackets are valid or not


//Solution

const isValid = (str) => {
    
    let stack = []

    for(let i=0;i<str.length;i++){
        if(str[i] == '{' || str[i] == '[' || str[i] == '('){
            stack.push(str[i])
        }
        else{
            if((str[i] == '}' && '{' == stack[stack.length-1]) || (str[i] == ')' && '(' == stack[stack.length-1]) || (str[i] == ']' && '[' == stack[stack.length-1])){
                stack.pop()
            }
            else{
                stack.push(str[i])
            }
        }
        console.log(stack)
    }
    if(stack.length > 0){
        return false
    }
    return true
}


//Inputs

let input = '({{}{}{}}[])'
console.log(isValid(input))
//Question
//You are given a string that has expressions
// Find if there are brackets that are redudent.
//Example : ((a+b)+(c)+(d+e)) In here, the bracket enclosing C is redundent


//Solution

const redBrackets = (str) => {
    
    let stack = []
    for(let i=0;i<str.length;i++){
        if(str[i] == ')'){
            if(stack.length > 1 && stack[stack.length-1] == '+' && stack[stack.length-2] == '('){
                stack.pop()
                stack.pop()
            }
        }
        else if(str[i] == '('){
            stack.push(str[i])
        }
        else if(str[i] == '+'){
            while(stack.length > 0 && stack[stack.length-1] == '+'){
                stack.pop()
            }
            stack.push(str[i])
        }
    }

    if(stack.length > 0){
        return false
    }
    return true
}


//Inputs


let input1 = '((a+b)+(c)+(d+e))'
let input2 = '((a+b)+c+(d+e))'

console.log(`${input1} is redudent ? ${redBrackets(input1)}`)
console.log(`${input2} is redudent ? ${redBrackets(input2)}`)
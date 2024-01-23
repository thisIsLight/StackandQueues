//Question
//Given a string, we want to reverse the string


//Solution

const reverse = (str) => {
    let stack = []
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    
    let res = ''

    while(stack.length != 0){
        res += stack.pop()
    }

    return res
}


//Inputs

let input = 'string'

let reversedInput = reverse(input)

console.log(reversedInput)
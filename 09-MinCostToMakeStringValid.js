//Question
//Given a string which has brackets but they might be bad order
//You need to find the minimum number of swaps you need to make them balanced
//Example : {{}}}}{}{}{} - In this the 5th bracket can be inverted make the string balanced


//Solution


const balanceDistance = (str) => {
    let stack = []

    for(let i=0;i<str.length;i++){
        if(str[i] == '{'){
            stack.push(str[i])
        }
        else{
            if(stack.length > 0 && stack[stack.length-1] == '{'){
                stack.pop()
            }
            else{
                stack.push(str[i])
            }
        }
    }

    let open = 0
    let close = 0
    while(stack.length > 0){
        let val = stack.pop()
        if(val == '{'){
            open++
        }
        else{
            close++
        }
    }

    return (open+1+close+1)/2
}


//Inputs


let input = '{{}}}}{}{}{}'

console.log(`The minimum swaps for ${input} are ${balanceDistance(input)}`)
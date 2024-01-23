//Question
//You are given a stack, sort the stack


//Solution

const sortStack = (arr) => {
    let stack = []
    let index = 1
    stack.push(arr.pop())
    
    while(arr.length > 0){
        let temp = []
        let val = arr.pop()
        while(stack.length > 0 && stack[stack.length-1] > val){
            temp.push(stack.pop())
        }
        stack.push(val)
        while(temp.length > 0){
            stack.push(temp.pop())
        }
        index++
    }

    return stack

}


//Inputs

let input = [5,7,3,8,9,2,1,8]

console.log(sortStack(input))

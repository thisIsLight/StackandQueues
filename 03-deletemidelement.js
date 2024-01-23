//Question
//You have to find the mid element of the stack


//Solution

const midelem = (stack) => {
    let mid = Math.floor(stack.length/2)

    while(stack.length-1 != mid){
        stack.pop()
    }

    console.log(stack[mid])
}


//Inputs

let input = [1,2,3,4,5,6,7,8]

midelem(input)
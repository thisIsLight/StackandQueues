//Question
//You are given a queue, you need to reverse that queue


//Solution


const reversequeue = (q) => {
    let stack = []

    while(q.length > 0){
        stack.push(q.shift())
    }

    while(stack.length > 0){
        q.push(stack.pop())
    }

    console.log(q)
}


//Inputs

let input = [1,2,3,4,5,6,7,8,9]

console.log(`Input before reversal ${input}`)
reversequeue(input)
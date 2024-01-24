//Question
//You are given a queue and you need to interleave the first half to second half of the queuequeues
//INteerleave means - add one element of one queue and then the element of another and so on
//Example : q1 = [1,2,3,4,5,100,101,102,103,104,105] -> output : [1,101,2,102,3,103,4,104,5,105]


//Question


const interleave = (q) => {

    let stack = []
    let len = q.length
    for(let i=0;i<Math.floor(len/2);i++){
        let val = q.shift()
        stack.push(val)
    }

    while(stack.length > 0){
        q.push(stack.pop())
    }

    for(let i=0;i<Math.floor(len/2);i++){
        let val = q.shift()
        stack.push(val)
    }
    
    while(stack.length > 0){
        let first = q.shift()
        let second = stack.pop()
        q.push(first)
        q.push(second)
    }
    
    for(let i=0;i<len;i++){
        let val = q.shift()
        stack.push(val)
    }
    
    while(stack.length > 0){
        q.push(stack.pop())
    }

    console.log(q)
}


//Inputs

let input1 = [1,2,3,4,5,101,102,103,104,105]

interleave(input1)


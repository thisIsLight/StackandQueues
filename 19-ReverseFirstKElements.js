//QUestion
//You have to reverse first K elements of a queue


//Solution


const reverseFrstKElements = (q, k) =>{
    let stack = []

    for(let i=0;i<k;i++){
        stack.push(q.shift())
    }

    while(stack.length > 0){
        q.push(stack.pop())
    }

    let nochange = q.length-k
    for(let i=0;i<nochange;i++){
        q.push(q.shift())
    }

    console.log(q)
}


//Inputs

let input1 = [1,2,3,4,5,6,7,8,9]
let input2 = 4

reverseFrstKElements(input1, input2)
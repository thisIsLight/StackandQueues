//Question
//In this question, you just have to demonstrate the queues in js


//Solution

const queues = (q) => {
    while(q.length > 0){
        console.log(q.shift())
    }
}


//Inputs

let input = [1,2,3,4,5,6,7,8,9]

queues(input)

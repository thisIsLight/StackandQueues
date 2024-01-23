//Question
//Insert at the bottom of stack


//Solution

const insertatbottom = (stk, val) => {
    if(stk.length == 0){
        stk.push(val)
        return
    }

    let value = stk.pop()
    insertatbottom(stk, val)
    stk.push(value)
}


//Input

let input1 = [1,2,3,4,5]
let input2 = 0

insertatbottom(input1, input2)

console.log(input1)



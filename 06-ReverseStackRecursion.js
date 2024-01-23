//Question
//Insert at the bottom of stack


//Solution

const insertatbottom = (stk, res) => {
    if(stk.length == 0){
        return
    }
    res.push(stk.pop())
    insertatbottom(stk, res)
}


//Input

let input1 = [1,2,3,4,5]

let output = []
insertatbottom(input1, output)

console.log(output)
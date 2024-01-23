//Question
//Given a 2 D array which shows who knows who, find out the celebrity


//Solution

const celeb = (arr, n) => {
    let stack = []

    for(let i=0;i<n;i++){
        arr.push(i)
    }

    while(stack.length != 1){
        let first = stack.pop()
        let second = stack.pop()

        if(arr[first][second]){
            stack.push(second)
        }
        else{
            stack.push(first)
        }
    }

    //chck if stacks top is actually a celeb
    let isCeleb = true
    for(let i=0;i<arr[stack[0]].length;i++){
        if(arr[stack[0]][i]){
            isCeleb = false
            break
        }
    }

    //check for column

    for(let i=0;i<arr.length;i++){
        if(arr[i][stack[0]]){
            isCeleb = false
            break
        }
    }

    console.log(isCeleb)
}


//Inputs

let input1 = 3
let input2 = [
    [0,0,1],
    [0,0,0],
    [1,0,0],
]

celeb(input2,input1)
//Question
//You are given an array and you need to find the next smallest element of the current index
//in that array


//Solution

const nextsmaller = (arr) => {
    let stack = [-1]
    let res = []
    for(let i=arr.length-1;i>=0;i--){
        let cur = arr[i]
        while(stack.length>0 && stack[stack.length-1] >= cur){
            stack.pop()
        }

        res.push(stack[stack.length-1])
        stack.push(cur)
    }

    console.log(res)
}


//Inputs

let input = [5,3,4,1,7,9]

nextsmaller(input)
//Question
//You are given a histogram data in an array. You need to find the area of the largest histogram


//Solution

const largestareainhistogram = (arr) => {
    let minileft = []
    let miniright = new Array(arr.length)
    let stack = [-1]
    for(let i=0;i<arr.length;i++){
        let cur = arr[i]
        while(stack.length > 0 && arr[stack[stack.length-1]] >= cur){
            stack.pop()
        }
        minileft.push(stack[stack.length-1])
        stack.push(i)
    }

    stack = [-1]
    for(let i=arr.length-1;i>=0;i--){
        let cur = arr[i]
        while(stack.length > 0 && arr[stack[stack.length-1]] >= cur){
            stack.pop()
        }
        miniright[i] = stack[stack.length-1]
        stack.push(i)
    }

    let res = 0

    console.log(minileft, miniright)
    for(let i=0;i<arr.length;i++){
        let l = arr[i]
        
        if(miniright[i] == -1){
            miniright[i] = arr.length
        }
        
        b = miniright[i] - minileft[i] - 1

        let area = l*b
        res = Math.max(res, area)
    }

    console.log(res)
}


//Inputs


let input = [1,4,5,3,3,1]

largestareainhistogram(input)
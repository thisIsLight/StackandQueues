//Question
//You are given a binary matrix. You have to find the maximum area made up of 1s


//Solution

const maxArea = (arr) => {
    let Maxsum = 0
    let maxrow = -1

    for(let i=0;i<arr.length;i++){
        let sum = 0
        for(let j=0;j<arr[i].length;j++){
            if(i == 0){
                sum+=arr[i][j]
            }
            else{
                arr[i][j] = arr[i][j] ? arr[i][j]+arr[i-1][j] : 0
                sum+= arr[i][j]
            }
        }
        if(sum > Maxsum){
            Maxsum = sum
            maxrow = i
        }
    }

    //Now we have the candidate that can contain the mazimum area so we will use histogram logic to find the area

    console.log(histogramarea(arr[maxrow]))



}

const histogramarea = (arr) => {
    let leftmini = []
    let rightmini = new Array(arr.length)
    let stk = [-1]

    //finding left minis
    for(let i=0;i<arr.length;i++){
        let cur = arr[i]

        while(stk.length > 0 && arr[stk[stk.length-1]] >= cur){
            stk.pop()
        }

        leftmini.push(stk[stk.length-1])
        stk.push(i)
    }

    //find right minis - first smallest minimum element for the current element
    stk = [-1]
    for(let i=arr.length-1;i>=0;i--){
        let cur = arr[i]
        while(stk.length > 0 && arr[stk[stk.length-1]] >= cur){
            stk.pop()
        }

        rightmini[i] = stk[stk.length-1]
        stk.push(i)
    }
    let res = 0

    for(let i=0;i<arr.length;i++){
        let l = arr[i]

        if(rightmini[i] == -1){
            rightmini[i] = arr.length
        }

        b = rightmini[i] - leftmini[i] - 1
        let area = l*b
        res = Math.max(res, area)
    }

    return res
}


//Inputs

let input = [
    [0,0,1,0],
    [1,0,1,1],
    [1,1,1,0],
    [1,1,1,1],
    [0,1,0,1],
]

maxArea(input)
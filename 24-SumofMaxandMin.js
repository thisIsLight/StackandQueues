//Question
//You are given an array and you have to find the sum of minimum and maximum number of subarrays of size k


//Solution

const minMaxSum = (arr, k) => {

    let mini = []
    let maxi = []

    for(let i=0;i<k;i++){
        
        while(mini.length > 0 && arr[mini[mini.length-1]] > arr[i] ){
            mini.pop()
        }
        while(maxi.length > 0 && arr[maxi[maxi.length-1]] < arr[i] ){
            maxi.pop()
        }

        mini.push(i)
        maxi.push(i)
    }

    let sum = arr[mini[0]] + arr[maxi[0]]
    console.log(mini,maxi,sum)
    for(let i=k;i<arr.length;i++){

        while(mini.length > 0 && i - mini[0] >= k ){
            mini.shift()
        } 
        while(mini.length > 0 && i - mini[0] >= k ){
            mini.shift()
        } 

        while(mini.length > 0 && arr[mini[mini.length-1]] > arr[i] ){
            mini.pop()
        }
        while(maxi.length > 0 && arr[maxi[maxi.length-1]] < arr[i] ){
            maxi.pop()
        }
        mini.push(i)
        maxi.push(i)
        sum += arr[mini[0]] + arr[maxi[0]]
        console.log(mini, maxi,sum)
    }

    console.log(sum)

}


//Inputs

let input1 = [2,5,-1,7,-3,-1,-2]
let input2 = 4

minMaxSum(input1, input2)
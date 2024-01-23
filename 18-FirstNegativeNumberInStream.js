//Question
//You are given a infinite number stream. You have to find the first negatice number from that stream
//in every window of size k


//Solution

const firstNegsinWindow = (arr, k) => {
    let q = []
    let res = []
    let rescount = 0
    for(let i=0;i<k;i++){
        if(arr[i] < 0){
            q.push(i)
        }
    }

    res[rescount++] = q.length > 0 ? arr[q[0]] : Infinity

    for(let i=k;i<arr.length;i++){
        if(arr[i] < 0){
            q.push(i)
        }
        if(q.length == 0){
            res[rescount++] = Infinity
        }
        else{
            let found = false
            while(q.length > 0){
                let val = q[0]
                let isValid = (i-val) < k
                if(isValid){
                    res[rescount++] = arr[val]
                    found = true
                    break
                }
                else{
                    q.shift()
                }
            }
            if(!found){
                res[rescount++] = Infinity
            }
        }
    }

    console.log(res)

}


//Inputs

let input1 = [1,2,-3,-4,6,7,5,3,5,8,-9,-9,-9]
let input2 = 4

firstNegsinWindow(input1, input2)
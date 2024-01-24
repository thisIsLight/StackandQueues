//Question
//You are given an array with amount of gas that station ahs and the amount of gas you need to go to next
//station. Find out the station which is best to make a round trip


//Solution


const circularTour = (arr) => {
    let q = []
    for(let i=0;i<arr.length;i++){
        q.push(arr[i])
    }
    let leftfuel = 0
    let count = 0
    let index = 0
    while(count < arr.length || index < arr.length){
        let cur = q.shift()
        if(cur[0]+leftfuel >= cur[1]){
            count++
            leftfuel = cur[0]+leftfuel - cur[1]
        }
        else{
            count  = 0
            leftfuel = 0
        }
        q.push(cur)
        index++
    }

    if(index >= arr.length){
        console.log('no route possible')
    }

    console.log(q)

}


//Inputs

let input = [
    [4,6],
    [6,5],
    [7,3],
    [4,5]
]

circularTour(input)
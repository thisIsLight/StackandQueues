//Question
//You are given two integers : N and M
//You need to implement M stacks in a N size array


//Solution


class NStacks{
    constructor(N, M){
        this.arr = new Array(N).fill(0)
        this.tops = new Array(M).fill(-1)
        this.next = new Array(N)
        this.freeSpace = 0
        this.initStacks = () => {
            for(let i=0;i<this.arr.length-1;i++){
                this.next[i] = i+1
            }
            this.next[this.next.length-1] = -1
        }

        //push
        this.push = (val, stack) => {
            //find free space
            let index = this.freeSpace

            //update freeSpace
            this.freeSpace = this.next[index]

            //push value to array
            this.arr[index] = val

            this.next[index] = this.tops[stack-1]

            //update next array
            this.tops[stack-1] = index
        }

        //pop
        this.pop = (stack) => {

            //update next array
            let index = this.tops[stack-1]
            
            this.tops[stack-1] = this.next[index]

            this.next[index] = this.freeSpace

            this.freeSpace = index

            return this.arr[index]
        }
        
    }
}


//Inputs


let nstacksObj = new NStacks(10,3)

nstacksObj.initStacks()

nstacksObj.push(1,3)
nstacksObj.push(2,3)
nstacksObj.push(3,3)
nstacksObj.push(999,1)
nstacksObj.push(998,1)
nstacksObj.push(997,1)

console.log(nstacksObj.pop(3))
console.log(nstacksObj.pop(1))
console.log(nstacksObj.pop(3))
console.log(nstacksObj.pop(1))
console.log(nstacksObj.pop(3))
console.log(nstacksObj.pop(1))
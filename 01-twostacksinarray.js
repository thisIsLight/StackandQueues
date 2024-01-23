//Question
//You are given an array and you have to implement two stacks in that array
//Try to use the space optimally


//Solution 


class TwoStacks{
    constructor(size){
        this.array = new Array(size)
        this.top1 = -1
        this.top2 = size

        this.push = (val, stack) => {
            if(this.top1+1 == this.top2){
                return false
            }
            if(stack == 1){
                this.top1++
                this.array[this.top1] = val 
            }
            if(stack == 2){
                this.top2--
                this.array[this.top2] = val 
            }
            return true
        }

        this.pop = (stack) => {
            if(stack == 1){
                if(this.top1 != -1){
                    return this.array[this.top1--]
                }
                return -1
            }
            if(stack == 2){
                if(this.top2 != this.array.length){
                    return this.array[this.top2++]
                }
                return -1
            }
        }
    }
}


//Inputs

let stack = new TwoStacks(10)

stack.push(1,1)
stack.push(2,1)
stack.push(3,1)
stack.push(4,1)
stack.push(99,2)
stack.push(5,1)
stack.push(6,1)
stack.push(7,1)
stack.push(98,2)
stack.push(8,1)


console.log(stack.pop(1))
console.log(stack.pop(1))
console.log(stack.pop(1))
console.log(stack.pop(1))
console.log(stack.pop(2))
console.log(stack.pop(1))
console.log(stack.pop(1))
console.log(stack.pop(2))
console.log(stack.pop(1))
console.log(stack.pop(1))

//Question
//You have to create a data structure that inserts, pops and return minimum value in o(1) time and O(1) space


//Solution

class Ultimateds{
    constructor(size){
        this.arr = new Array(size)
        this.mini = Infinity
        this.top = -1

        this.push = (val) => {
            if(this.top == -1){
                this.top++
                this.arr[this.top] = val
                this.mini = val
            }
            else if (this.top < this.arr.length){
                if(val > this.mini){
                    this.top++
                    this.arr[this.top] = val
                }
                else{
                    let cur = 2*val - this.mini
                    this.mini = val
                    this.top++
                    this.arr[this.top] = cur
                }
            }
        }

        this.pop = () => {
            if(this.top == -1){
                return -1
            }
            else{
                if(this.arr[this.top] > this.mini){
                    return this.arr[this.top--]
                }
                else{
                    let val = this.mini
                    this.mini = 2*this.mini - this.arr[this.top]
                    this.top--
                    return val
                    
                }
            }
        }

        this.getMini = () => {
            return this.mini
        }
    }
}


//Inputs

let input  = [5,3,6,4,1,8,5,3,7]

let obj = new Ultimateds(input.length)

obj.push(5)
obj.push(3)
obj.push(6)
obj.push(4)
obj.push(1)


console.log('minimum', obj.getMini())
console.log(obj.pop())
console.log('minimum', obj.getMini())
console.log(obj.pop())
console.log(obj.pop())
console.log('minimum', obj.getMini())
console.log(obj.pop())
console.log('minimum', obj.getMini())

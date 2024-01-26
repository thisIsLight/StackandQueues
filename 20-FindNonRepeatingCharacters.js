//Question
//Find non repeating characters


//Solution


const nonrepeatingchars = (A) => {
    let q = []
    let map = new Map()
    let res = ''    
    for(let i=1;i<A.length;i++){
        let cur = A[i]
        
        if(map.has(cur)){
            map.set(cur, map.get(cur+1))
        }
        else{
            map.set(cur, 1)
        }
        
        q.push(cur)
        
        while(q.length > 0){
            if(map.has(q[0]) && map.get(q[0]) > 1){
                q.shift()
            }
            else{
                res += q[0]
            }
        }
        
        if(q.length == 0){
            res+='#'
        }
        
    }

    console.log(res)
}


//Inputs

let input = 'aabc'

nonrepeatingchars(input)
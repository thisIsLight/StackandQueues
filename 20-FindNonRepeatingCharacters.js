//Question
//Find non repeating characters


//Solution


const nonrepeatingchars = (str) => {
    let q = []
    let res = ''

    for(let i=0;i<str.length;i++){
        
        if(q.length == 0){
            res+=str[i]
            q.push(str[i])
        }
        else{
            if(q[0] == str[i]){
                while(q.length > 0 && q[0] == str[i]){
                    q.shift()
                }
                if(q.length == 0){
                    res+='#'
                }
                else{
                    res+=q[0]
                }
            }
            else{
                res+=q[0]
                q.push(str[i])
            }   
        }
    }

    console.log(res)
}


//Inputs

let input = 'aabc'

nonrepeatingchars(input)
function groupObjectsBy(array,key){
    return array.reduce((res,element) => {
        if(res[element[key]]==undefined){
            res[element[key]]=[]
        }
        res[element[key]].push(element)
        return res;
    },{})
}


let obj = [
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
]

let res = groupObjectsBy(obj,"channel")
console.log(res)
class SortArray{
    constructor(array){
        this.originalArray = array;
    }
    
    sortArr(a,b){
        if(a<b){
            return -1
        }
    }
    getSortedArray(originalArray){
        return originalArray.sort(this.sortArr)
    }
};

class SortObjectArray extends SortArray{
    sortArr(a,b){
        if(a.a < b.a){
            return -1
        }
    }
};

const input1 = [5,3,2,1]
const obj1 = new SortArray()
const sortedArray = obj1.getSortedArray(input1)
console.log(sortedArray)

const input2 = [{a: 5},{a: 2}]
const obj2 = new SortObjectArray()
const sortedObjArray = obj2.getSortedArray(input2)
console.log(sortedObjArray)

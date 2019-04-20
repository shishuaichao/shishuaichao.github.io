class Base {
    constructor(){
        
    }
    isNum(num){
        if(num!=undefined && typeof num === 'number'){
            return true
        }else {
            return false
        }
    }
}
const base = new Base()
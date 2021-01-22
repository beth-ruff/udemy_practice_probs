function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    //build objects like so:
    //{ 1: 1, 8: 1, 2: 1}
    let obj1 = {};
    let obj2 = {};
    for(let i = 0; i < str1.length; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++){
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
    for(let key in obj1){
        if(!(key in obj2)){
            console.log(key)
            return false;
        }
        if(obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true;
}
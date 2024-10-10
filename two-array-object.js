// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    const result = {};
    let keyPointer =0;
    let valPointer = 0;

   
    while (valPointer < keyArr.length && valPointer < valArr.length){
        result[keyArr[keyPointer]] = valArr[valPointer];
        keyPointer++;
        valPointer++;
    }

    while(keyPointer < keyArr.length){
        result[keyArr[keyPointer]] = null;
        keyPointer++;
    }
    return result;
}

function makeFreqCounter(str){
    const freqObj={};
    for(let ltr of str){
        freqObj[ltr] = freqObj[ltr] + 1 || 1;
    }
    return freqObj;
}
// add whatever parameters you deem necessary
function constructNote(msg, allowedLtrs) {
    if(msg.length > allowedLtrs.length) return false;
    const msgFreqObj = makeFreqCounter(msg);
    const allowedLtrsFreqObj = makeFreqCounter(allowedLtrs);
    for(let ltr in msgFreqObj){
        if(!allowedLtrsFreqObj[ltr]) return false;
        if(msgFreqObj[ltr] > allowedLtrsFreqObj[ltr]) return false;
        
    }
    return true;
}

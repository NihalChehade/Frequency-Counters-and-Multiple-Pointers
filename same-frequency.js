function makeFreqCounter (int){
    const freqMap = new Map();
    for(let d of int.toString()){
        let valCount = freqMap.get(d) || 0;
        freqMap.set(d, valCount + 1);
    }
    return freqMap;
}

// add whatever parameters you deem necessary
function sameFrequency(posInt1, posInt2) {
    if(posInt1.toString().length !== posInt2.toString().length) return false;
    const int1Freq = makeFreqCounter(posInt1);
    const int2Freq = makeFreqCounter(posInt2);
    
    for(let key of int1Freq.keys()){
        if(int2Freq.has(key) === false) return false;
        if(int2Freq.get(key) !== int1Freq.get(key)) return false;
    }
    return true;
}

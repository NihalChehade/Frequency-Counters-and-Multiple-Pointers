// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvrg) {
    let left = 0;
    let right = sortedArr.length -1;

    while(left < right){
        const average =(sortedArr[left]+sortedArr[right])/2;

        if(average ===targetAvrg) return true;
        if(average > targetAvrg){
            right--;
        }else {
            left++;
        }
    }
    return false;
}

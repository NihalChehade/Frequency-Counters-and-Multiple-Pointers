// add whatever parameters you deem necessary
function separatePositive(nonZeroArr) {
    let left = 0;
    let right= nonZeroArr.length -1;
    while(left < right){
        if(nonZeroArr[left] < 0 && nonZeroArr[right] > 0){
            const temp = nonZeroArr[left];
            nonZeroArr[left] = nonZeroArr[right];
            nonZeroArr[right]= temp;
            left++;
            right--;
        }else if(nonZeroArr[left] > 0){
            left++;
        }else if(nonZeroArr[right]<0){
            right--;
        }
    }
    return nonZeroArr;
}

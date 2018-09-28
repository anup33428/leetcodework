/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var resultarry = [];
    var result = 0;
    var isNegative;
    var range = Math.pow(2,31);
    if(x < -range || x >= (range) ){
        return 0;
    }
    if(x < 0) {
        isNegative = true;
        x = 0 - x;
    } else{
         isNegative = false;
    }
    while (x > 0){
        resultarry.push(parseInt(x % 10));
        x = parseInt(x / 10);
    }
    var multiplier = 1;
    for( i = resultarry.length -1; i >= 0; i--){
        result = result + resultarry[i]*multiplier;
        multiplier = multiplier * 10;
    }
    if(result < -range || result >= (range) ){
        return 0;
    }
    if(isNegative){
      return 0 - result;
    }
    return result;
};

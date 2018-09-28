var arr = [ "Hello", "Brother", "how", "are", "you","I","hope",["you", "are", "fine", "thankyou"],"this","isAnup"];


function getLongestString(a,l){
  var longestString = l;
  for(var i=0; i<a.length; i++){
    if (a[i] instanceof Array) {
      longestString = getLongestString(a[i],longestString);
    }
    else {
      if (a[i].length > longestString.length){
        longestString = a[i];
    }
  }
}
 return longestString;

}

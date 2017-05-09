
function checkSCM (arr, scm) {
  var testArr = arr.map ( function (data) {
    return scm%data;
  });
  for (var i=0; i<=arr.length;i++) {
    if (testArr[i]!==0) {
      return false;
    } else { return true; }
  }
  i =0;
}

function smallestCommons(arr) {
  var scm = arr[0]*arr[1];
  var currentScm = scm;
  var innerArr = [];
  var j = 1; //scm multiplier counter
  for (var i = arr[0]+1;i<arr[1];i++) {
    innerArr.push(i);
  }
  
  while (checkSCM(innerArr,currentScm)===false) {
    j++;
    currentScm = j*scm;    
  }
  
  return j;
 // return innerArr;
}


smallestCommons([1,5]);


//this function maps the inner array with the smallest common multiple, if the remainder of all the cells are 0 then the condition is true.
//otherwise it returns false.
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
  var scm = arr[0]*arr[1];  // the first common multiple of the original array
  var currentScm = scm;
  var innerArr = [];
  arr.sort(); //sorts the original array in case they weren't in order
  var j = 1; //scm multiplier counter
  for (var i = arr[0]+1;i<arr[1];i++) {
    innerArr.push(i); // creates the range of numbers inside the original array
  }
  
  while (checkSCM(innerArr,currentScm)===false) {
    j++;   // **** for some reason this stops at 2, but the loop shouldn't break when j is at 2;
    currentScm = j*scm;    
  }
  
  return currentScm;

}



smallestCommons([1,5]);

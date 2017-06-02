function getHash(array){
  var hash = {};
  for (var i=0; i<array.length; i++){
    hash[ array[i] ] = true;
  }
  return hash;
}

function setSymmetricDifference(a, b){
  var hash = getHash(b);
  var diff = [];
  for (var i=0; i<a.length; i++){
    var value = a[i];
    if ( !hash[value]){
      diff.push(value);
    }
  }
  return diff;
}

export default setSymmetricDifference
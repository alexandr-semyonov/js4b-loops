function listAll(min, max) {
  var result = '';
  for (var i = min; min <= max; min++){
    result += min + ' ';
  }
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = '';
  max -= 1;
  for (var i = max; max > min; max--){
    result += max + ' ';
  } 
  return result.trim();
}
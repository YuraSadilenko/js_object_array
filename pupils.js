var pupils = {
  Anna: 29, 
  Misha: 90, 
  Stepan: 1, 
  Elena: 80,
}

getBestMark();

function getBestMark() {
  var max = 0,
    pupil = '';
  for (name in pupils) {
    if (pupils[name] > max) 
    max = pupils[name];
    pupil = name;
  }  
  return console.log('Best student: ' + pupil + '\r\nBest ' + pupil + '\'s mark: '+ max);
}
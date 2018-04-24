function cardSlideIn() {
  var elem = document.getElementById("inner_meaning_frame");   
  var pos = -498;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 22) {
      clearInterval(id);
    } else {
      pos=pos+10; 
      elem.style.top = pos + 'px'; 
    }
  }
}



function cardSlideOut() {
  var elem = document.getElementById("inner_meaning_frame");   
  var pos = 22;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == -498) {
      clearInterval(id);
    } else {
      pos=pos-10; 
      elem.style.top = pos + 'px'; 
    }
  }
}

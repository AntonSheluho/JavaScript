let imgA = document.getElementById('imgA')

imgA.onmousedown = function(event) {
    console.log(event.pageY, event.pageX)
 
    document.body.append(imgA);
    moveAt(event.pageX, event.pageY)

    function moveAt(pageX, pageY) {
        imgA.style.left = pageX - imgA.offsetWidth / 2 + 'px';
        imgA.style.top = pageY - imgA.offsetHeight / 2 + 'px';
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);

  imgA.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    imgA.onmouseup = null;
  };

}
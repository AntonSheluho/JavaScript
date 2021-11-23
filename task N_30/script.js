const img = document.getElementsByTagName('img');

function getEl() {
  console.log(sayTrue(img))
  if (sayTrue(img)) {
    for (let i = 0; i < img.length; i++) {
      if (event.target == img[i]) {
        
        console.log(`before start func`)
        img[i].onmousedown = function(event) {
          console.log('work 2');
          getIndex(img[i])
            let shiftY = event.clientY - img[i].getBoundingClientRect().top;
            let shiftX = event.clientX - img[i].getBoundingClientRect().left;
        
            function move(event) {
                img[i].style.top = event.pageY - shiftY + 'px';
                img[i].style.left = event.pageX - shiftX + 'px';
            }
        
            document.addEventListener('mousemove', move);
        
            img[i].onmouseup = function() {
                document.removeEventListener('mousemove', move);
           }
        }
        img[i].ondragstart = function() {
          return false;
        };
      } else {
        img[i].style.zIndex = 0 
      }
    }
  }
  console.log(sayTrue(img))
}

document.addEventListener('mouseover', getEl);

function getIndex(el) {
  el.style.zIndex = 1
}

function sayTrue(el) {
  for (let j = 0; j < el.length; j++) {
    if (event.target == img[j]) {
      return true;
    };
  }
  return false
}
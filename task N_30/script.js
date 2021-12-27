const img = document.getElementsByTagName('img');

// I made it because while zIndex one of them ten but other images have zIndex less all images don't increase they zIndex more ten. I don't know why but after ten all right.
// The image which user taking has max zIndex + 1.
for (let i = 0; i < img.length; i++) {
  img[i].style.zIndex = 11
}

// Function which find image with max zIndex. But zIndex is constantly growing for all images. It isn't problem for this task but it's problem for big sita.
// Here should be validation for big site which should return primary zIndex for other images.
function findHighestZIndex() {
    const el = document.getElementsByTagName('img');
    let highest = 0;
    for (let i = 0; i < el.length; i++)
    {
        let zIndex = el[i].style.zIndex;
        if (zIndex > highest) {
            highest = zIndex;
        }
    }
    return highest;
}

// function which move any images 
function getEl() {
    let shiftY;
    let shiftX;

    for (let i = 0; i < img.length; i++) {
        img[i].onmousedown = function(event) {
            if (event.target == img[i]) {
              img[i].style.zIndex = +findHighestZIndex() + 1;
              img[i].style.cursor = 'none';
              shiftY = event.clientY - img[i].getBoundingClientRect().top;
              shiftX = event.clientX - img[i].getBoundingClientRect().left;
            }
        
            function move(event) {
                if (event.target == img[i]) {
                    img[i].style.top = event.pageY - shiftY + 'px';
                    img[i].style.left = event.pageX - shiftX + 'px';
                }
            }
        
            document.addEventListener('mousemove', move);
        
            img[i].onmouseup = function() {
                img[i].style.cursor = 'default'
                document.removeEventListener('mousemove', move);
            }
        }
    }
}

// Event Listener which look at when user push a mousedown 
document.addEventListener('mouseover', getEl);
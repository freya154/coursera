
function upDate(previewPic) {
   
    console.log(previewPic.src);
    console.log(previewPic.alt);

    
    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    
    imageDiv.textContent = previewPic.alt;
}


function reset() {
    var imageDiv = document.getElementById('image');

    
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.textContent = "Hover over an image below to display here";
}


var thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(thumb) {
    thumb.addEventListener('mouseover', function() {
        upDate(this);
    });
    thumb.addEventListener('mouseout', reset);
});
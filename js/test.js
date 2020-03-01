var imagedataurl;
var btn = document.querySelector('#btn');
function readUrl(input) {
    var reader = new FileReader();
    reader.onload= function(e){
        imagedataurl=e.target.result;
        document.querySelector('#image1').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function hide(){
    document.querySelector('#image2').src = steg.encode(document.querySelector('#text').value, imagedataurl);
}
function decode(input){
    var reader = new FileReader();
    reader.onload= function(e){
        document.querySelector('#decoded').innerText = steg.decode(e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
}

btn.addEventListener('click', hide);
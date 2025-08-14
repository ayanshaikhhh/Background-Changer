function changeBG(color) {
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName('text');
    if(color === "#000000") {
        document.body.style.color = 'white';
    } else {
        document.body.style.color = 'black';
    }
}


























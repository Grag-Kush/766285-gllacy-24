function Slider() {

    var inp = document.getElementsByName('toggle');
    var selected;
    var islastslide;
    var temp;

    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            selected = i;
            temp = i + 1;
            if (temp == inp.length) {islastslide = true} else {islastslide = false}
        }
    }

    if (islastslide) {
        inp[0].checked = true;
    } else {
        inp[selected+1].checked = true;
    }
    setTimeout(Slider, 3000);
}
setTimeout(Slider, 3000);
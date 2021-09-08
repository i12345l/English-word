var word=[['1','2','3','4'],['5','6','7','8']]

var order=0,now;

function button_click(a){
    now=a;
}

function pass(){
    document.getElementById("a_1").innerHTML=word[order][0];
    document.getElementById("a_2").innerHTML=word[order][1];
    document.getElementById("a_3").innerHTML=word[order][2];
    document.getElementById("a_4").innerHTML=word[order][3];
    order++;
}
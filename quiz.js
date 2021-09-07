var word=[['1','2','3','4'],['5','6','7','8']]

var now=0;

function button_click(a){
    alert("버튼"+a+"를 눌렀습니다.");
}

function pass(){
    document.getElementById("a_1").value=word[now][0];
    document.getElementById("a_2").value=word[now][1];
    document.getElementById("a_3").value=word[now][2];
    document.getElementById("a_4").value=word[now][3];
    now++;
}
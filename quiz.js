var word=[['1','2','3','4','q1'],['5','6','7','8','q2'],['9','10','11','12','q3']]
var answer=[];

var order=0,now=0;

function button_click(a){
    now=a;
}

function pass(){
    if(now!=0){
        var sel = document.getElementsByName("shop");
        for(var i=0;i<sel.length;i++){
            sel[i].checked=false;
        }
        document.getElementById("a_1").innerHTML=word[order][0];
        document.getElementById("a_2").innerHTML=word[order][1];
        document.getElementById("a_3").innerHTML=word[order][2];
        document.getElementById("a_4").innerHTML=word[order][3];
        document.getElementById("q").innerHTML=word[order][4];
        answer.push(now);
        order++;
        now=0;
    }else{
        alert("select your answer");
    }
}

function skip(){
    document.getElementById("a_1").innerHTML=word[order][0];
    document.getElementById("a_2").innerHTML=word[order][1];
    document.getElementById("a_3").innerHTML=word[order][2];
    document.getElementById("a_4").innerHTML=word[order][3];
    document.getElementById("q").innerHTML=word[order][4];
    order++;
    now=0;
}


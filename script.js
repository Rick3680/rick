function quiz(){
    var q1 = prompt("em que ano JavaScript foi criada? A)1985 B)1995 C)1978 D)2018" );
    if (q1!=null && q1!="") {

        if (q1 == "B" || q1 == "b") {
            alert("Isso, foi criada em 1995");
        } 
        else {
            alert("Errado, foi criada em 1995");
        }
    }
    else {
        alert("Você não respondeu")
    }

}
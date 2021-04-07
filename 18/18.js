function go(){
    var number = document.getElementById("num").value;
    var text = "";
    var i;
    var n1 = 0, n2 = 1, nextTerm;
    for (i = 0; i < number; i++) {
    text += n1 + ", " ;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    document.getElementById("series").innerHTML = "<b>Febonacci Series is : </b><br> " + text.slice(0,-2) + ".";    
}
document.getElementById("d").innerHTML = "--";
document.getElementById("m").innerHTML = "--";
document.getElementById("y").innerHTML = "--";
function age() {
    var d1 = document.getElementById("dd").value;
    var m1 = document.getElementById("mm").value;
    var y1 = document.getElementById("yy").value;
    if (d1 <= 31 && m1 <= 12) {
        var date = new Date();
        var d2 = date.getDate();
        var m2 = date.getMonth();
        var y2 = date.getFullYear();
        var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2)
            d2 += month[m2];
        if (m2 > m1 && m2 != m1)
            m2 += 12;
        var d = Math.abs(d2 - d1);
        var m = Math.abs(m2 - m1);
        var y = Math.abs(y2 - y1);
        document.getElementById("d").style.color = "hsl(259, 100%, 65%)";
        document.getElementById("m").style.color = "hsl(259, 100%, 65%)";
        document.getElementById("y").style.color = "hsl(259, 100%, 65%)";
        document.getElementById("d").innerHTML = d;
        document.getElementById("m").innerHTML = m;
        document.getElementById("y").innerHTML = y;
    }
    else {
        document.getElementById("d").innerHTML = "Please enter valid";
        document.getElementById("m").innerHTML = "Please enter valid";
        document.getElementById("y").innerHTML = "Please enter valid";
        document.getElementById("d").style.color = "red";
        document.getElementById("m").style.color = "red";
        document.getElementById("y").style.color = "red";
        document.getElementById("d").style.fontSize = "10px";
        document.getElementById("m").style.fontSize = "10px";
        document.getElementById("y").style.fontSize = "10px";
    }
}

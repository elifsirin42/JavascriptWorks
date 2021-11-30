//document.getElementById("bio").innerHTML="Elif Sirin : 2020"

// var intro1 = document.getElementById("intro1");

// var message = document.getElementById("message");

// message.innerHTML = intro1.innerHTML;

// var alllist = document.getElementsByTagName("ul");
// var cities = alllist[0]

// allindex = cities.getElementsByTagName("li");

// for(i=0; i<allindex.length; i++){
//     alert(allindex[i].innerHTML);
// }
// ctrl k + c provides selected lines are commentted

// var classMembers = document.getElementsByClassName("intro1");

// alert(classMembers[0].innerHTML);
// alert(classMembers.length);

// var queryEleements = document.querySelectorAll("p.intro1");
// alert(queryEleements.length);

// var userName = document.getElementsByName("usersName");
// alert(userName[0].value);

var merve= document.getElementById("merve").addEventListener("mouseover",changeColor);

function changeColor(){
    document.getElementById("div1").style.color="red";

    var userName = document.getElementsByName("usersName");
    userName[0].value = "Derin"
}
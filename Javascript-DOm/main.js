// function doSomething(){
//  }
//  function btnFunction(){
//     
// 
//  }

function doSomething(){
    document.getElementById("mybody").setAttribute("style","background-color:#F5D95A;")

    
}
function btnFunction(){
    var x = document.getElementById("button").getAttribute("name")
    document.getElementById("blogName").innerHTML = x
}

// has attribute
function onCheck(){
    var inputtedAtr = document.getElementById("blog").value
    if(document.getElementById("blog").hasAttribute(inputtedAtr)){
        alert ("attribute available")

        var x = document.getElementById("blog").getAttribute("name")
            document.getElementById("display").innerHTML = x
            document.getElementById("display1").innerHTML = "'Judith - Late is not never ,its all about time'"
            document.getElementById("display2").innerHTML = "Veronicah - Software Developer "
            document.getElementById("display3").innerHTML = "Juliet - Life is a mistery"
            document.getElementById("display4").innerHTML = "Jane-if the opportunity doesn't knock , build a door. "
            document.getElementById("display5").innerHTML = "Pamela -The price of greatness is responsibility"
            document.getElementById("display6").innerHTML = "Constant -If you dont stand for something in life you will fall for anything"
            document.getElementById("display6").innerHTML = "Celine -Unwilling to make sacrifice, unworth to taste success"

    }
    else{
        alert("not available")
    }
 
}
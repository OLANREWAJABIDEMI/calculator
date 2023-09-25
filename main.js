function show (x){
    document.getElementById("screen").value+=x
}
function remove(){
    document.getElementById("screen").value=''
    document.getElementById("up"). value=""
}
function answer(){
  
    document.getElementById("up").value = eval(document.getElementById("screen"). value)
    document.getElementById("screen"). value =''
}
function pm(){
    var back = - + document.getElementById("screen").value
    document.getElementById("screen"). value =back
}
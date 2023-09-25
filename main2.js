function show (x){
document.getElementById("screen").value+=x
}
function wipe(){
    document.getElementById("screen").value=""
}
function answer(){
    document.getElementById("screen").value= eval(document.getElementById("screen").value)
}


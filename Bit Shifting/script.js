function convertToBit(shift){
    var in_number = parseInt(document.getElementById("number").value)
    
    if (isNaN(in_number)){
        return;
    }
    
    if (shift == "right"){
        in_number = Math.floor(in_number/2)
    }
    else if (shift == "left"){
        in_number *= 2
    }
        
    number = (in_number.toString(2)).split("")
    for (var i=number.length; i<32; i++){
        number.unshift("0")
    }
    
    out_number = ""
    for (var i=0; i<32; i++){
        out_number += number[i]
    }

    document.getElementById("bits").innerHTML = out_number
    document.getElementById("number").value = in_number
}
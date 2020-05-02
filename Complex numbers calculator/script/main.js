function change_sign(sign){
    document.getElementById("dropdownMenuButton").innerHTML = sign;
}

class Complex{
    constructor(re=0, im=0){
        this.re = parseInt(re);
        if (im == "j" || im == "+j" || im == "-j"){
            this.im = 1;
        }
        else{
            this.im = parseInt(im);
        }
    }

    show(){
        if (this.im == 0){
            return this.re;
        }
        else if (this.im < 0){
            return this.re + '' + this.im + 'j'
        }
        else if (this.re == 0){
            return this.im + 'j'
        }
        return this.re + '+' + this.im + 'j'
    }

    add(c1, c2){
        this.re = c1.re + c2.re;
        this.im = c1.im + c2.im;
    }

    substract(c1, c2){
        this.re = c1.re - c2.re;
        this.im = c1.im - c2.im;
    }

    multiply(c1, c2){
        this.re = c1.re*c2.re - c1.im*c2.im;
        this.im = c1.im*c2.re + c1.re*c2.im;
    }

    divide(c1, c2){
        this.re= ((c1.re*c2.re)+(c1.im*c2.im))  / ((c2.re*c2.re)+(c2.im*c2.im));
        this.im= (c1.re*(-c2.im)+(c1.im*c2.re)) / ((c2.re*c2.re)+(c2.im*c2.im));
    }
}

function add(complex1, complex2, result){
    result.add(complex1, complex2);
    document.getElementById("result").value = result.show();    
}

function substract(complex1, complex2, result){
    result.substract(complex1, complex2);
    document.getElementById("result").value = result.show();  
}

function multiply(complex1, complex2, result){
    result.multiply(complex1, complex2);
    document.getElementById("result").value = result.show();  
}

function divide(complex1, complex2, result){
    result.divide(complex1, complex2);
    document.getElementById("result").value = result.show();  
}

function complex2dict(complex){
    var im_re = /[-+]?[0-9]*\.?[0-9]?[j]/;
    var im_number = complex.match(im_re);
    if (im_number != null){
        complex = complex.replace(im_number[0], '')
    }
    console.log(im_number);
    var re_re = /[-+]?[0-9]*\.?[0-9]+/
    var re_number = complex.match(re_re);

    var dict = {
        "re": (re_number != null)? re_number[0] : 0,
        "im": (im_number != null)? im_number[0] : 0
    }
    return dict;
}

function play(){
    var sign = document.getElementById("dropdownMenuButton").innerHTML;

    complex1 = document.getElementById("number1").value;
    complex2 = document.getElementById("number2").value;

    var re = /[\d+-j]+$/;
    var format_OK = true;
    format_OK = re.test(complex1);
    format_OK = format_OK & re.test(complex2);

    if (format_OK == false){
        document.getElementById("message").innerHTML = "Check complex number!";    
    }else{
        document.getElementById("message").innerHTML = "The complex number is OK";
    }

    complex1 = complex2dict(complex1);
    complex2 = complex2dict(complex2);
    
    var c1 = new Complex(complex1["re"], complex1["im"]);
    var c2 = new Complex(complex2["re"], complex2["im"]);
    
    var result = new Complex(0,0);
    
    switch (sign){
        case "+":
            add(c1, c2, result);
            break;
        case "-":
            substract(c1, c2, result);
            break;
        case "x":
            multiply(c1, c2, result);
            break;
        case "/":
            divide(c1, c2, result);
            break;
    }
    
}

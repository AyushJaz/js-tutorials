let disp = document.getElementById("display");
let val = document.getElementsByClassName("keys");
let operator = document.getElementsByClassName("arikeys");
let val1 = 0;
let s = 0;
function sizeAdjust(){
    let desplayLength=disp.value.length;
    let size=45;
    if(desplayLength<=10)
    disp.style.fontSize="45px";
    else if(desplayLength<16)
    {
      size= 45-(0.7*desplayLength);
        disp.style.fontSize=size+"px";
    }
    else if(desplayLength<=28)
    {
        size= 45-(0.96*desplayLength);
         disp.style.fontSize=size+"px";
    }
    else
    {
        let str = String(disp.value);
        str=String(str);
        str=str.slice(0,str.length-1)
        disp.value=str;
    }
}
for (let i = 0; i < val.length; i++) {
    val[i].addEventListener("click", function () {
        let value = val[i].getAttribute('value');
        disp.value += value;
        val1 = disp.value;
        sizeAdjust()
    })
}
for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function () {
        let ob = operator[i].getAttribute('value');
        if (ob === "div")
            disp.value += "/";
        else if (ob === "min")
            disp.value += "-";
        else if (ob === 'add')
            disp.value += "+";
        else if (ob === "mul")
            disp.value += "*";
        else if (ob === "opp")
            disp.value = (eval(disp.value) * -1);
        else if (ob === "che") {
            // if(s===0)
            let str = String(disp.value);
              
            if (s === 1) {
                let index = str.indexOf('^');
                str=str.replace(str[index],'**');
            }
            val1=eval(str);
            disp.value=val1
            s=0;
            bracket=0;
        }

        else if (ob === "back")
            disp.value = disp.value.substring(0, disp.value.length - 1);
        else if (ob === "root")
            disp.value = Math.sqrt(eval(disp.value));
        else if (ob === "reci")
            disp.value = (1 / eval(disp.value));
        else if (ob === "per")
            disp.value = (eval(disp.value) / 100);
        else if (ob === "c")
            disp.value = "";
        else if (ob === 'pow') {
            // val1=eval(disp.value);
            disp.value += '^';
            s = 1;
        }
        else if (ob === 'brack-two')
            disp.value += ")";
        else if(ob === 'brack-one')
        disp.value += "(";
        sizeAdjust()
    }
    
    )
}

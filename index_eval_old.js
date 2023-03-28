function screen(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";
}
function deleteSymbol(){
    let str = document.getElementById("result").value;
    document.getElementById("result").value = str.slice(0,-1);
}

/*
function persentage(){
    document.getElementById("result").value += '%';
    let str = document.getElementById("result").value;
    let arr;
    let temp;
    if (str.includes('.')){
        arr = str.match(/\d+.\d+|\d+|[^0-9]/g);
    } else{
        arr = str.match(/\d+|[^0-9]|\d+/g);
    }
    console.log(arr);
    document.getElementById("result").value = arr.slice(0, -2); 
    temp = arr[0] * arr[2] / 100;
    console.log(arr[0] * arr[2] / 100);
    document.getElementById("result").value += temp;

    //document.getElementById("result").value = arr.slice(0,-1); 


    //document.getElementById("result").value += str[str.indexOf('%')-1]/100;
    
    //str = str.slice(0,-2);
}
*/

// eval can be safe used by client, but not secure by server
function calculate(){
    let str = document.getElementById("result").value;
    //.replace(/[^()*-+.%[0-9]]/, '')
    if(str.includes('%'))
    document.getElementById("result").value = eval(str);    
}
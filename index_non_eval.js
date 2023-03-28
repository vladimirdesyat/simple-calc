function screen(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function calculate(){
    let str = document.getElementById("result").value;
    let arr;
    if (str.includes('.')){
        arr = str.match(/\d+.\d+|\d+|[^0-9]/g);
    } else{
        arr = str.match(/\d+|[^0-9]|\d+/g);
    }   
    let temp = 0;
    temp += +arr[0];
    let i = arr.length;
    if(arr.includes('*')){
        temp *= +arr[arr.indexOf('*')+1];
    } else if(arr.includes('/')){
        temp /= +arr[arr.indexOf('/')+1];
    } else if(arr.includes('+')){
        temp += +arr[arr.indexOf('+')+1];
    } else if(arr.includes('-')){
        temp -= +arr[arr.indexOf('-')+1];
    }else{}
    document.getElementById("result").value = temp;
}
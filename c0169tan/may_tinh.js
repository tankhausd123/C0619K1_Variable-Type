function myFunction(phepTinh){

    let a = Number(document.getElementById('so1').value);
    let b = Number(document.getElementById('so2').value);
    let result;
    if (phepTinh=="cong"){
        result = a + b ;
    }

    else if (pheptinh=="tru"){
        result = a - b ;
    }
    else if (pheptinh=="nhan"){
        result = a * b ;
    }
    else if (pheptinh=="chia") {
        result = a / b ;
    }
    document.getElementById('result').innerHTML=result;

}
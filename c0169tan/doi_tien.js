function myFunction(){

    let amount = document.getElementById('sotien').value;
    let from = document.getElementById('input').value;
    let to = document.getElementById('output').value;

    let result;



    if (from == 'vnd' && to == 'usd2'){
        result = amount / 23000;
    }

    else if (from == 'usd'  && to == 'vnd2'){
        result = amount*23000;
    }
    else if (from == 'vnd' && to == 'vnd2'){
        result =amount;
    }
    else if (from == 'usd' && to =='usd2') {
        result =amount;
    }
    document.getElementById('result').innerHTML=result;

}
let operator = '';
let giaTri1 = '';
let giaTri2 = '';
let resetManHinh = false;
let luuGiaTri1 = true;
let manHinh = document.getElementById("man_hinh");
let giaTriMoi = '';

function clickNumber( number ) {

    let giaTriCu = manHinh.value;

    if (resetManHinh) {
        giaTriMoi = number;
        resetManHinh = false;
    } else {
        giaTriMoi = giaTriCu + number;
    }
    manHinh.value = giaTriMoi;

    if (luuGiaTri1 == true) {
        giaTri1 = giaTriMoi;
    } else {
        giaTri2 = giaTriMoi;
    }

    console.log('Giá trị 1: ', giaTri1, '; Giá trị 2: ', giaTri2);
}

function clickOperator( newOperator ) {
    operator = newOperator;
    resetManHinh = true;
    luuGiaTri1 = false;
}

function clickEqual() {
    let ketQua = 0;

    let so1 = Number(giaTri1);
    let so2 = Number(giaTri2);

    switch (operator) {
        case '+':
            ketQua = so1 + so2;
            break;
        case '-':
            ketQua = so1 - so2;
            break;
        case '*':
            ketQua = so1 * so2;
            break;
        case '/':
            ketQua = so1 / so2;
            break;

    }

    manHinh.value = ketQua;

    operator = '';
    resetManHinh = true;
    giaTri1 = ketQua;
    giaTri2 = '';
    luuGiaTri1 = false;
}
function nutXoa() {
    manHinh.value= "";
    operator = '';
    giaTri1 = '';
    giaTri2 = '';

}
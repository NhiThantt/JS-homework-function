//BÀI 1
function mainResult(){
    var scoreAdm = getELE('inputScore').value;
    var location = Number(getELE('selLocation').value);
    var user = Number(getELE('selUser').value);
    var score1 = Number(getELE('inputScore1').value);
    var score2 = Number(getELE('inputScore2').value);
    var score3 = Number(getELE('inputScore3').value);

    var sum = score1 + score2 + score3 + location + user;
   
    if ((score1 > 0) && (score2 > 0) && (score3 > 0)){
        
        getELE('txtResult').innerHTML = sum >= scoreAdm ? 'Bạn đã đậu. Tổng điểm:' + sum : 'Bạn đã rớt. Tổng điểm:'+ sum;
    } else {
        getELE ('txtResult').innerHTML = 'Bạn đã rớt do có môn điểm bằng 0';
    }
      
}
//BÀI 2
const KW1 = 500;
const KW2 = 650;
const KW3 = 850;
const KW4 = 1100;
const KW5 = 1300;
function mainBill(){
    var name = getELE('inputName2').value;
    var kw = Number(getELE ('inputKW').value);
    var calcBill = 0;
    if (kw > 0 && kw <= 50 ){
        calcBill = kw * KW1;
    } else if (kw > 50 && kw <= 100) {
        calcBill = 50*KW1 + (kw - 50)*KW2;
    } else if (kw > 100 && kw <= 200){
        calcBill = 50*KW1 + 50*KW2 + (kw - 100)*KW3;
    } else if (kw > 200 && kw <= 350){
        calcBill = 50*KW1 + 50*KW2 + 100*KW3 + (kw - 200)*KW4;
    } else if (kw > 350){
        calcBill = 50*KW1 + 50*KW2 + 100*KW3 + 150*KW4 + (kw - 350)*KW5;
    } else {
        alert ('Số kw không hợp lệ. Quý khách vui lòng nhập lại.');   
    }
    getELE('txtBill').innerHTML = 'Họ tên khách hàng: ' + name + '. Tiền điện: ' + calcBill.toLocaleString();
}

//BÀI 3
const TO60 = 0.05;
const UP60= 0.1;
const UP120 = 0.15;
const UP210= 0.2;
const UP384 = 0.25;
const UP624 = 0.3;
const UP960 = 0.35;
function mainTax(){
    var name = getELE('inputName3').value;
    var inYear = Number(getELE('inputInYear').value);
    var person = Number(getELE('inputPerson').value);
    var inTax = inYear - 4e6 - person*16e5;
    var calcTax = 0;
    
    if (inTax <= 60e6){
        calcTax = inTax*TO60;
    } else if (inTax > 60e6 && inTax <= 120e6){
        calcTax = 60e6*TO60 + (inTax - 60e6)*UP60;
    } else if (inTax > 120e6 && inTax <= 210e6){
        calcTax = 60e6*TO60 + 60e6*UP60 + (inTax - 120e6)*UP120;
    } else if (inTax > 210e6 && inTax <= 384e6) {
        calcTax = 60e6*TO60 + 60e6*UP60 + 90e6*UP120 + (inTax - 210e6)*UP210;
    } else if (inTax > 384e6 && inTax <= 624e6){
        calcTax = 60e6*TO60 + 60e6*UP60 + 90e6*UP120 + (384e6 - 210e6)*UP210 + (inTax - 384e6)*UP384;
    } else if (inTax > 624e6 && inTax <= 960e6){
        calcTax = 60e6*TO60 + 60e6*UP60 + 90e6*UP120 + (384e6 - 210e6)*UP210 + (624e6 - 384e6)*UP384 + (inTax - 624e6)*UP624;
    } else if (inTax > 960e6){
        calcTax =  60e6*TO60 + 60e6*UP60 + 90e6*UP120 + (384e6 - 210e6)*UP210 + (624e6 - 384e6)*UP384 + (960e6 - 624e6)*UP624 + (inTax - 960e6)*UP960;
    } else {
        alert ('Số tiền thu nhập không hợp lệ');
    }
    calcTax = new Intl.NumberFormat("vn-VN").format(calcTax);
    getELE('txtTax').innerHTML = 'Họ tên: ' + name + '. Tiền thuế thu nhập cá nhân: ' + calcTax + 'VNĐ';
}

//BÀI 4
function mainCBill(){
    var customer = getELE('selCustomer').value;
    var code = getELE('inputCode').value;
    var channel = getELE('inputChannel').value;
    var connect = getELE ('inputConnect').value;
    var total=0;

    if (customer == 'personal'){
       total = 4.5 + 20.5 + channel*7.5; 
    } else if (customer == 'company' ){
        connect <= 10? total= 15 + 75 + 50*channel : total= 15 + 75 + (connect-10)*5 + 50*channel;
    } else {
        alert ('Vui lòng chọn loại khách hàng')
    }
    total = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(total);
    getELE('txtCBill').innerHTML = "Mã khách hàng: " + code + ". Tiền cáp:" + total;
}

function disableConnect(){
    var customer = getELE('selCustomer').value;
    getELE('inputConnect').style.display = customer =='company' ? 'block': 'none'; 
}

function getELE(id){
    return document.getElementById(id);
}
//BÀI TẬP 1
//Khối 1: Input (inputNum1, inputNum2)
//Khối 2: B1: Tạo hàm, gắn hàm vào button 
        //B2: Trong hàm tạo công thức tính:salary = inputNum1 * inputNum2
//Khối 3: Output salary   
function sumSalary(){
    var num1 = document.getElementById('inputNum1').value;
    var num2 = document.getElementById('inputNum2').value;
    var salary = num1 * num2;
    document.getElementById('txtSalary').innerHTML = salary.toLocaleString();
}
    document.getElementById('btnSalary').onclick = sumSalary;



//BÀI TẬP 2
//Khối 1: Input (num1, num2, num3, num4, num5)
//Khối 2: B1: Tạo hàm, gắn hàm vào button 
        //B2: Trong hàm tạo công thức tính:average = (num1 + num2 + num3 + num4 + num5)/5
//Khối 3: Output average  

function sumAverage(){
    var one = document.getElementById('num1').value;
    var two = document.getElementById('num2').value;
    var three = document.getElementById('num3').value;
    var four = document.getElementById('num4').value;
    var five = document.getElementById('num5').value ;
    var average = (Number(one) + Number(two) + Number(three) + Number(four) + Number(five))/5
    document.getElementById('txtAverage').innerHTML = average;
}
    document.getElementById('btnAverage').onclick = sumAverage;



//BÀI TẬP 3
//Khối 1: Input (inputUsd)
//Khối 2: B1: Tạo hàm, gắn hàm vào button 
        //B2: Trong hàm tạo công thức tính:sum = 23500 * inputUsd
//Khối 3: Output vnd  
function sumVnd(){
    var usd = document.getElementById('inputUsd').value;
    document.getElementById('txtVnd').innerHTML = new Intl.NumberFormat('vn-VN').format(23500*usd);
}
    document.getElementById('btnVnd').onclick = sumVnd;



//BÀI TẬP 4
//Khối 1: Input (inputLength, inputWidth)
//Khối 2: B1: Tạo hàm, gắn hàm vào button 
        //B2: Trong hàm tạo công thức tính:p = (inputLength + inputWidth) * 2
//Khối 3: Output perimeter 
function sumPerimeter(){
    var length = document.getElementById('inputLength').value;
    var wide = document.getElementById('inputWidth').value;
    var perimeter = (Number(length) + Number (wide))*2;
    document.getElementById('txtPerimeter').innerHTML = perimeter;
}
    document.getElementById('btnPerimeter').onclick = sumPerimeter;



//BÀI TẬP 5
//Khối 1: Input (inputNumber)
//Khối 2: B1: Tạo hàm, gắn hàm vào button 
        //B2: Trong hàm tạo công thức tính:số hàng chục = Math.floor(inputNumber / 10), số hàng đơn vị =  inputNumber % 10, tổng số 2 chữ số = số hàng chục + số hàng đơn vị
//Khối 3: Output tổng số 2 chữ số
function sumTwoDigit(){
    var twoDigit = document.getElementById('inputNumber').value;
    var ten = Math.floor(twoDigit/10);
    var unit = twoDigit % 10

    document.getElementById('txtSum').innerHTML = ten + unit;
}
    document.getElementById('btnSum').onclick = sumTwoDigit;

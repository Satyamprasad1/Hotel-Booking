function btnClick(){
    let s1 = document.getElementById('btc').value
    let info = document.querySelector('.user-info')
    let roomDetail = document.querySelector('.roomBox')
    let ammDetail = document.querySelector('.amenities')
    let Payment = document.querySelector('.payment')
    let summaryD = document.querySelector('.summary');
    if(info.style.display ==='none'){
        info.style.display = 'block'
        roomDetail.style.display = 'none'
        ammDetail.style.display = 'none'
         Payment.style.display = 'none'
          summaryD.style.display ='none'
    }else{
         info.style.display = 'none'
    }
}

// for room
function btnRoom(){
    let info = document.querySelector('.user-info')
    let s2 = document.getElementById('room').value
    let roomDetail = document.querySelector('.roomBox')
    let ammDetail = document.querySelector('.amenities')
    let Payment = document.querySelector('.payment')
    let summaryD = document.querySelector('.summary');
    if(roomDetail.style.display ==='none'){
        roomDetail.style.display = 'block'
        ammDetail.style.display = 'none'
         info.style.display = 'none'
          Payment.style.display = 'none'
           summaryD.style.display ='none'
    }else{
         roomDetail.style.display = 'none'
    }
}


// for amenities
function btnAmi(){ 
    let info = document.querySelector('.user-info')
    let roomDetail = document.querySelector('.roomBox')
    let s3 = document.getElementById('amt').value
    let ammDetail = document.querySelector('.amenities')
    let Payment = document.querySelector('.payment')
    let summaryD = document.querySelector('.summary');
    if(ammDetail.style.display ==='none'){
        ammDetail.style.display = 'block'
        info.style.display = 'none'
        roomDetail.style.display = 'none'
         Payment.style.display = 'none'
          summaryD.style.display ='none'
      
    }else{
        ammDetail.style.display = 'none'
    }
}


// advance amount
function btnAmount(){ 
    let info = document.querySelector('.user-info')
    let roomDetail = document.querySelector('.roomBox')
    let s4 = document.getElementById('amt').value
    let ammDetail = document.querySelector('.amenities')
    let Payment = document.querySelector('.payment')
    let summaryD = document.querySelector('.summary');
    if(Payment.style.display ==='none'){
        Payment.style.display = 'block'
        info.style.display = 'none'
        roomDetail.style.display = 'none'
        ammDetail.style.display = 'none'
        summaryD.style.display ='none'
      
    }else{
        Payment.style.display = 'none'
    }
}

// register

function Register() {
    // Retrieving input values
    let customerNamm = document.getElementById('custName').value;
    let UserName = ''
    if(customerNamm === ''){
        UserName = '----'
    }else{
        UserName = customerNamm
    }
    let customerDate = document.getElementById('custDate').value;
    let customerSelected_Date = ''
    if(customerDate === ''){
        customerSelected_Date = '----'
    }else{
        customerSelected_Date = customerDate
    }

    let customerDays = parseInt(document.getElementById('custDays').value);
    let customerPerson = parseInt(document.getElementById('custPerson').value);
    let customerDays_Booked = ''
    if (isNaN(customerDays) || customerDays <= 0) {
        customerDays_Booked += "Days not Booked. ";
    }else{
        customerDays_Booked = customerDays
    }

    let customerPersonIn = ''

    if (isNaN(customerPerson) || customerPerson <= 0) {
        customerPersonIn += " person not selected";
    }else{
        customerPersonIn = customerPerson
    }

    
    let customerDeluxChecked = document.getElementById('delux').checked;
    let customerSuiteChecked = document.getElementById('suite').checked;
    let customerAirChecked = document.getElementById('aircon').checked;
    let customerLockerChecked = document.getElementById('locker').checked;
    let customerMoney = parseInt(document.getElementById('rupayaa').value);
    let summaryD = document.querySelector('.summary');

    // Check for mandatory advance payment
    if (isNaN(customerMoney) || customerMoney <= 0) {
        alert('Advance Payment Required*')
        return;

    }

    // Determining room type and calculating room cost per day
    let roomType = 'No Room Selected';
    let roomCostPerDay = 0;
    if (customerDeluxChecked) {
        roomType = 'Deluxe';
        roomCostPerDay = 2500;
    } else if (customerSuiteChecked) {
        roomType = 'Suite';
        roomCostPerDay = 4000;
    }

    // Determining amenities and calculating their cost per day
    let Amenities = 'No Amenities Selected';
    let amenitiesCostPerDay = 0;
    if (customerAirChecked && customerLockerChecked) {
        Amenities = 'Air Conditioner and Locker';
        amenitiesCostPerDay = 1000 + 300;
    } else if (customerAirChecked) {
        Amenities = 'Air Conditioner';
        amenitiesCostPerDay = 1000;
    } else if (customerLockerChecked) {
        Amenities = 'Locker';
        amenitiesCostPerDay = 300;
    } else {
        Amenities = 'No Amenities Selected';
    }

    // Calculating total cost per day and multiplying by number of days
    let totalCostPerDay = roomCostPerDay + amenitiesCostPerDay;

    // let fullandFinal = totalCostPerDay * customerDays;
    let fullandFinal = ''
    if(fullandFinal = totalCostPerDay * customerDays){
        fullandFinal += fullandFinal
    }else{
        fullandFinal = '0'
    }

    // Adding extra cost for additional persons
    let extraPersonCost = customerPerson > 2 ? (customerPerson - 2) * 1000 * customerDays : 0;
    fullandFinal += extraPersonCost;

    // Calculating balance amount
    // let balanceAmount = fullandFinal - customerMoney;
    let balanceAmount = ''
    if(balanceAmount === ''){
       balanceAmount = "----"
    }else{
        balanceAmount=fullandFinal-customerMoney 
       
    }

    

    // Generating the summary
    summaryD.style.display ='block'
    
    summaryD.innerHTML = `
    <table>
        <tr>
            <td>Customer Name:</td>
            <td>${UserName}</td>
        </tr>
        <tr>
            <td>Check in Date:</td>
            <td>${customerSelected_Date}</td>
        </tr>
        <tr>
            <td>Total no Of Days:</td>
            <td>${customerDays_Booked}</td>
        </tr>
        <tr>
            <td>Total no of person:</td>
            <td>${customerPersonIn}</td>
        </tr>
        <tr>
            <td>Room Type:</td>
            <td>${roomType}</td>
        </tr>
        <tr>
            <td>Amenities:</td>
            <td>${Amenities}</td>
        </tr>
        <tr>
            <td>Advance Amount:</td>
            <td>${customerMoney}</td>
        </tr>
        <tr>
            <td>Total Cost:</td>
            <td>${fullandFinal}</td>
        </tr>
        <tr>
            <td>Balance Amount:</td>
            <td>${balanceAmount}</td>
        </tr>
    </table>
`;

}


   
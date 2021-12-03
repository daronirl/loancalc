// Variables
const calcResults = document.querySelector('#loan-form');
const loanAmount = document.querySelector('#amount');
const loanInterest = document.querySelector('#interest');
const loanYears = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
const loading = document.querySelector('#loading');
const results = document.querySelector('#results');


// Function to calculate results
calcResults.addEventListener('submit', (e) => {
    

    const principle = parseFloat(loanAmount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    

    //Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x-1);
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);

        document.querySelector('#results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';

    } else {

        showError('Please check your numbers');
    }

 setTimeout(calcResults, 2000);

  

    e.preventDefault();
});


// Show Error

function showError(error) {
    // Create div
    const errorDiv = document.createElement('div');
    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error before heading
    card.insertBefore(errorDiv, heading);

    // clear error after 3 seconds
    setTimeout(clearError, 2000);

}

// Clear error message
function clearError() {
    document.querySelector('.alert').remove();
}

// Clear loading 
function clearLoading() {
    document.querySelector('#loading').remove();
}

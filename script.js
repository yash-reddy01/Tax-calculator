const form = document.getElementById('incomeForm');
const grossIncome = document.getElementById('grossIncome');
const extraIncome = document.getElementById('extraIncome');
const ageGroup = document.getElementById('ageGroup');
const deductions = document.getElementById('deductions');
const errorIcons = document.getElementById("error")
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.querySelector('.close');

function validateInputs() {
  let isValid = true;

  if (isNaN(grossIncome.value)) {
    isValid = false;
  }

  if (isNaN(extraIncome.value) && extraIncome.value !== '') {
    isValid = false;
  }

  if (ageGroup.value === '') {
    isValid = false;
  }

  if (isNaN(deductions.value) && deductions.value !== '') {
    isValid = false;
  }

  return isValid;
}

function calculateTax() {
  const grossIncomeValue = parseFloat(grossIncome.value);
  const extraIncomeValue = parseFloat(extraIncome.value) || 0;
  const deductionsValue = parseFloat(deductions.value) || 0;
  const overallIncome = grossIncomeValue + extraIncomeValue - deductionsValue;

  if (overallIncome <= 800000) {
    modalMessage.textContent = 'No tax applicable';
  } else {
    const taxableIncome = overallIncome - 800000;
    let taxRate;

    switch (ageGroup.value) {
      case '<40':
        taxRate = 0.3;
        break;
      case '>=40&<60':
        taxRate = 0.4;
        break;
      case '>=60':
        taxRate = 0.1;
        break;
      default:
        taxRate = 0;
    }

    const tax = taxableIncome * taxRate;
    modalMessage.textContent = `Tax amount: ₹ ${tax.toFixed(2)}`;
  }

  modal.style.display = 'block';
}

// Event listeners
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateInputs()) {
    calculateTax();
  }
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

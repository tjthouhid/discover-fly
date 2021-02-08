document.getElementById('firstclass-minus').addEventListener('click', () => {
  handleTicketChange('input-firstclass', 'subtotal', true, false);
  calculateTotal();
});

document.getElementById('firstclass-plus').addEventListener('click', () => {
  handleTicketChange('input-firstclass', 'subtotal', true, true);
  calculateTotal();
});

document.getElementById('economy-minus').addEventListener('click', () => {
  handleTicketChange('input-economy', 'subtotal', false, false);
  calculateTotal();
});

document.getElementById('economy-plus').addEventListener('click', () => {
  handleTicketChange('input-economy', 'subtotal', false, true);
  calculateTotal();
});

document.getElementById('book-now').addEventListener('click', () => {
  let firstclassCount = document.getElementById('input-firstclass').value;
  let economyCount = document.getElementById('input-economy').value;

  if (isNaN(firstclassCount) || firstclassCount == "") {
    firstclassCount = 0;
  }
  if (isNaN(economyCount) || economyCount == "") {
    economyCount = 0;
  }

  document.getElementById('firstclass-count').innerText = firstclassCount;
  document.getElementById('economy-count').innerText = economyCount;

  const firstclassPrice = firstclassCount * 150;
  const economyPrice = economyCount * 100;

  document.getElementById('firstclass-price').innerText = firstclassPrice;
  document.getElementById('economy-price').innerText = economyPrice;

  document.getElementById('total-bill').innerText = document.getElementById('total').innerText;

  document.getElementById('booking-form-js').style.display = "none";
  document.getElementById('booking-details').style.display = "block";
});

document.getElementById('go-back').addEventListener('click', () => {
  document.getElementById('booking-form-js').style.display = "block";
  document.getElementById('booking-details').style.display = "none";
});

function handleTicketChange(count, value, isFirstClass, isIncrease) {
  let ticketCount = parseFloat(document.getElementById(count).value);
  const subtotal = parseFloat(document.getElementById(value).innerText);

  if (isNaN(ticketCount) || ticketCount == "") {
    ticketCount = 0;
  }

  if (isFirstClass && isIncrease) {
    document.getElementById(count).value = ticketCount + 1;
    document.getElementById(value).innerText = subtotal + 150;
  }
  if (isFirstClass && !isIncrease && ticketCount > 0) {
    document.getElementById(count).value = ticketCount - 1;
    document.getElementById(value).innerText = subtotal - 150;
  }
  if (!isFirstClass && isIncrease) {
    document.getElementById(count).value = ticketCount + 1;
    document.getElementById(value).innerText = subtotal + 100;
  }
  if (!isFirstClass && !isIncrease && ticketCount > 0) {
    document.getElementById(count).value = ticketCount - 1;
    document.getElementById(value).innerText = subtotal - 100;
  }
}

function calculateTotal() {
  const subtotal = parseFloat(document.getElementById('subtotal').innerText);
  document.getElementById('tax').innerText = Math.round(parseFloat(subtotal * .1));
  const tax = parseFloat(document.getElementById('tax').innerText);
  document.getElementById('total').innerText = tax + subtotal;
}
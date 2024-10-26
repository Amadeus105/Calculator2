const calculate = () => {
  const name = document.getElementById('name').value;
  let price = Number(document.getElementById('startingBid').value);

  if (!name || !price) {
    alert("Please enter both name and starting bid!");
    return;
  }

  const education = Number(document.getElementById('education').value);
  const netWorth = Number(document.getElementById('networth').value);
  const caste = Number(document.getElementById('caste').value);
  const skills = document.querySelectorAll('.skill:checked');
  const reputation = document.querySelectorAll('.reputation:checked');
  const age = document.querySelector('input[name="age"]:checked').value;

  for (let i = 0; i < skills.length; i++) {
    price += Number(skills[i].value);
  }

  for (let i = 0; i < reputation.length; i++) {
    price *= Number(reputation[i].value);
  }

  price = price * education * netWorth * age + caste;

  const result = `The price for ${name} is $${price.toFixed(2)}!`;
  document.getElementById('result').innerHTML = result;
};

document.getElementById('calculate').addEventListener('click', calculate);
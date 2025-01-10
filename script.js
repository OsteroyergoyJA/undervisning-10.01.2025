const header = document.querySelector('#header');
const button = document.querySelector('#fetch-button');

// async function test() {
//   console.log('hey');
//   await new Promise((promise) => setTimeout(promise, 5000));
//   header.textContent = 'Async';
// }

async function getData() {
  let catFacts = [];
  for (let i = 0; i < 3; i++) {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    catFacts.push(data);
  }
  return catFacts;
}


button.addEventListener('click', async () => {
  const factArray = await getData();
  factArray.forEach((catFact) => {
    const paragraf = document.createElement('p');
    paragraf.textContent = catFact.fact;
    document.body.appendChild(paragraf);
});
});

// async function test() {
//   const facts = await getData();
//   return facts;
// }
// function

// async function showData() {
//   const facts = await getData();
//   facts.forEach();
// }

// test();

// async function getData() {
//   const response = await fetch('https://catfact.ninja/fact');
//   const data = await response.json();
//   header.textContent = data.fact;
// }

// getData();

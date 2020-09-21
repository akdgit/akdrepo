import validator from './validator.js';

fetch('http://qabarnasis.kuepa.com/api/alliance/login/list.json')
  .then(response => response.json())
  .then(data => console.log(data));

console.log(validator);

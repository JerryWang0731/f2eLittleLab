var temp = {};

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then((json) => {
    temp = json;
    console.log(temp);
  });


console.log(temp);
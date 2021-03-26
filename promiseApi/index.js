const fire = async () => {
    console.log('hello1');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('hello2');
    const respJson = await response.json();
    console.log('hello3');
    console.log(respJson);
};

fire();
console.log('hello fire');
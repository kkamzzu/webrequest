console.log('start')

fetch('https://jsonplaceholder.typicode.com/todos/3')
// 매개변수자리라 response 아님
.then( (item) => item.text())
.then((result) => {console.log(result)})

console.log('end')
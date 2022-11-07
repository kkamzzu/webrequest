// title가져오기


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.text())
.then(
    (result) =>{
        // 객체화
        const users = JSON.parse(result)
        // 구조분해
        const {id} = users[0]
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    }
)
.then( (item)=> item.text())
.then( (posts) => {
    const number = JSON.parse(posts)
    const str = number[0]
    console.log(str.title)
})

// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
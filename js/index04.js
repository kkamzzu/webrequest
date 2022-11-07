// request ->필요한 데이터를 조회, 추가, 수정, 삭제
// 조회 : Get request (GET은 기본)
// 추가 : Post request 
// 수정 : Put request
// 삭제 : Delete request

// fetch('주소' {key:value})
// 리퀘스트의 부가정보 -> (header, body)
// header -> 내가 필요한 metod ('GET', 'POST', 'PUT', 'DELETE')
// body -> 내가 필요한 data(GET, DElETE -> 필요없음)
// (POST PUT -> 필요함)

//값은 수정 못하지만 작동하는 걸 볼 순 있음.


// 추가하려면 추가데이터 필요함 (객체데이터) ->stringify()
// 요청 {method:'POST',body:JSON}

// json
// result -> id 추가


const user = {
    userId: 4,
    title: 'title01',
    completed: true
}

fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method:'POST',
        body: JSON.stringify(user)
    }
).then( (response) => response.text())
.then(
    (result) => {console.log(result)}
)
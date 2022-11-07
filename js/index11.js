// promise 객체

// promise 체인 : 기다림, 처리, 처리완료
// 처리 안됐을 때 : catch() ->조심해야해
// 작동의 에러 문제점 표어를 해도되지만 마지막에 들어가야해
// 처리완료: finally()





fetch('https://jsonpㅇlaceholder.typicode.com/posts/1')
.then(
    (response) => response.text()
)
.then(
    (result)=> {
        console.log('welcome');
        console.log(result)
    }
)
.catch(()=> console.log('에러 발생.')) //맨 마지막에 두기
.finally(()=> console.log('작업이 끝났습니다'))



// then(실행, error)

// fetch('https://jsonplaceholdeㄹr.typicode.com/posts/1')
// .then(
//     (response) => response.text(),(error) => console.log(error)
// )
// .then(
//     (result)=> {
//         console.log(result);
//     }
// )//에러 안나면 잘뜸
// //에러시 :TypeError: Failed to fetch


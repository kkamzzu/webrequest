// fetch() :요청할 수 있는 함수

// 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있음.

// 네트워크 요청은 다음과 같은 경우에 이뤄집니다.

// 주문 전송
// 사용자 정보 읽기
// 서버에서 최신 변경분 가져오기
// 등등
// .then(콜백함수) -> 필요한 작업 -> 그 시점 작업이 진행

// https://jsonplaceholder.typicode.com/ (참고) -> Resources

// fetch('https://www.google.com')
//     .then((response) => response.text())
//     .then((result) => {console.log(result)})


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.text() )
.then((result) => {console.log(result)});
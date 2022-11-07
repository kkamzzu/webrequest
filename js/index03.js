// photo -> 요청
//albumID ===1
//figure 생성 >img(thumbnail)> figcaption(title)
// response -> result -> parse, filter -> level, basic

// 요청하기
fetch('https://jsonplaceholder.typicode.com/photos')

// 받아서 작업        //return
.then((response) => response.text())
// 다시 값 받기
.then( (result) =>{
    // JSON이라는 전역객체
    const level = JSON.parse(result)
    const basic = level.filter( (str) => 
    str.albumId === 1)
    for (let i of basic){
        document.write(
            `
            <figure>
            <img src="${i.thumbnailUrl}" alt="${i.title}">
            <figcaption>${i.title}</figcaption>
            </figure>
            `
        )
    }
    
    
})


async function str(){
    //실행
    try{
        const response = await fetch('https://jsonplacekkholder.typicode.com/todos/1')
        const result = await response.text()
        console.log(result)
    }
    //error
    catch(error){
        console.log('error 입니다')
    }
    //마감
    finally{
        console.log('작업이 끝났습니다')
    }
}
str();
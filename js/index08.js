fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.text())
.then( 
   (result) => {
    const users = JSON.parse(result)
    // console.log(users[1])
    return users[1]
   }
)

.then( (users) => {
    const {address} = users
    // console.log(address)
    return address
})

.then( (address) => {
    const {geo} = address
    return geo
    // console.log(geo)
})
.then((geo) => {
    const {lat} = geo
    return lat
})

.then((lat) => {
    console.log(lat)
})
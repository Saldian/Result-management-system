// require('dotenv').config()
// const mongoose = require('mongoose')


// const express = require('express')
// const app = express()
// const port = 3003

// const middleware = require('./utilities/middleware')
// const connect = require('./utilities/connect')


// app.use(express.json())
// app.use(middleware.requestLogger)

// try{

//   mongoose.connect()
// console.log('connected to mongoDB');

// }catch (error) {
// console.log('error connection to mongoDB:' )

// } 




// const me = {
//     Fname: 'Saljang',
//     Lname: 'Jallow',
//     ID: '0617',
//     Picture: 'jpg',
//     Status: 'online',
//     DOB: '31/10/2001',
//     Gender: 'F',
//     Phone: '7276050',
//     Email: 'jallowsaljang@gmail.com',
//     Living: 'True',
// }

// let users = [
//     {
//         id: 1,
//         username: 'camariana',
//         phone:  '1010101',
//         password: 'secrete'

//     },

//     {
//         id: 2,
//         username: 'jankeh',
//         phone:  '111222',
//         password: 'secrete'

//     }

// ]

// // Get One



// app.use(middleware.unknownEndpoint)
// app.use(middleware.requestLogger)




// app.listen(port, () => {
//   console.log('example app listening on port ${port}')
// })


const express = require( 'express' )
const app = express()
//const userRouter = require('./resources/user/user.controller')
const connect = require('./utilities/connect')

const middleware = require('./utilities/middleware')

const PORT = 3003

app.use(express.json())
app.use(middleware.requestLogger)


try {
	connect() // Invoking the connect function
	console.log('connected to MongoDB')
} catch (error) {
	console.log('error connection to MongoDB:', error.message)
}

//app.use('/api/user/', userRouter)

app.use( middleware.unknownEndpoint )


app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`)
})
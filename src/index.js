require('dotenv').config()
const mongoose = require('mongoose')

const { json } = require('express')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = process.env.PORT
const middleware = require('./utilities/middleware')


app.use(express.json())
app.use(middleware.requestLogger)

const URI =  process.env.MONGODB_URI
const connect = () => {
  return mongoose.connect(
    URI,
    {
      useNewUrlperser: true,
      useUnifiedTopology:
      true,
      autoIndex: false
    }
  )

}


try{

  mongoose.connect(URI)
console.log('connected to mongoDB');

}catch (error) {
console.log('error connection to mongoDB:' , error.message)

}




const me = {
    Fname: 'Saljang',
    Lname: 'Jallow',
    ID: '0617',
    Picture: 'jpg',
    Status: 'online',
    DOB: '31/10/2001',
    Gender: 'F',
    Phone: '7276050',
    Email: 'jallowsaljang@gmail.com',
    Living: 'True',
}

let users = [
    {
        id: 1,
        username: 'camariana',
        phone:  '1010101',
        password: 'secrete'

    },

    {
        id: 2,
        username: 'jankeh',
        phone:  '111222',
        password: 'secrete'

    }

]

// Get One
app.get('/api/users/:id', (req, res) => {
    const id= req.params.id
    const user = users.find((user) => user.id === Number(id))
    
    if(user) {
      res.json(user)
    }
    else {
      res.status(404).end()
    }
  })
  
  // Get All
    app.get('/api/users', (req, res) => {
      res.json(users)
    })
         
// Delete One
app.delete('/api/users/:id', (req, res) => {
  const id= req.params.id
     users = users.filter((user)   => user.id !== Number(id))

    res.status(204).end()

})

// Post
app.post('/api/users', (req,res)  => {
  const content = req.body

  res.json(content)
  
})

// Put 
app.put('/api/users/:id', (req, res) => {
const id = req.params.id
res.id

})



app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)




app.listen(port, () => {
  console.log('example app listening on port ${port}')
})


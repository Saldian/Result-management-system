const { request } = require('express')
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')


app.use(express.json())

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



app.get('/api/users/:id', (req, res) => {
    const id= req.params.id
    const user = users.find((user)   => user.id === Number(id))
    res.json(user)

    app.get('/api/users', (req, res) => {
      res.json(users)
    })

    if(user) {
      res.json(user)
    }
    else {
      res.status(404).end()
    }
})
         


app.delete('/api/users/:id', (req, res) => {
  const id= req.params.id
     users = users.filter((user)   => user.id !== Number(id))

    res.status(204).end()

})

app.post('/api/users', (req,res)  => {
  const content = req.body

  res.json(content)
  
})

app.put('/api/users/:id', (req, res) => {
const id = req.params.id
res.id

})



app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)




app.listen(port, () => {
  console.log('example app listening on port ${port}')
})


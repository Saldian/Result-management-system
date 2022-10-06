// const { response } = require('express')
// const Users = require('./user.model') 


// app.get('/api/users/:id', (req, res) => {
//     const id= req.params.id
//     const user = Users.findById(id)
//     res.json(user)
    
//     if (!user) {
//         response.status( 404 ). json({
//             error: 'user not found!'
//         })
//     }
//   })
  
//   // Get All
//     app.get('/api/users', (req, res) => {
//       res.json(users)
//     })
         
// // Delete One
 app.delete('/api/users/:id', (req, res) => {
   const id= req.params.id
    users = users.filter((user)   => user.id !== Number(id))

    res.status(204).end()

 })

// // Post
 app.post('/api/users', (req,res)  => {
   const content = req.body

  res.json(content)
  
 })

// // Put 
 app.put('/api/users/:id', (req, res) => {
 const id = req.params.id
 res.id

 })

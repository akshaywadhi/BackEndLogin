const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./Model/Model')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/Users').then(
  res => console.log('Connected To MongoDb')
)
.catch(err => console.log('Something Went Wrong'))



app.get('/users', async (req,res) => {
  userModel.find()
  .then(data => {
  res.json(data)
    
  })

  .catch(err => console.log(err))
})


app.post('/users/adduser', (req,res) => {

  const adduser = req.body

  let user = new userModel(req.body)

  user.save()

  .then(data => {
    res.send('UserAdded')
  })
  .catch(err => console.log(err))

})


app.post('/users/checkData', (req,res) => {

  const userName = req.body.name
  const userPassword = req.body.password
 console.log(userPassword)

  userModel.find()
  .then(data => {
   let userFound = false
    for(const user of data){
      if(userName === user.name && userPassword === user.password){
        res.json({data: 'valid'})
        userFound = true
        break
      }
    }

    if(!userFound){
      res.json({data : 'invalid'})
    }
    })
  })


app.listen(3000, () => {
  console.log('Server Is Running On Port 3000')
})
const express = require('express')
const bodyParser = require('body-parser')
const response = require('./response')

const app = express()
app.use(bodyParser.json())
const PORT = 8000

const users = [
  {
    username: 'rikisetiyopambudi@gmail.com',
    password: 'R1k1s3t1Y0'
  },
  {
    username: 'rikisetiyopambudi',
    password: 'R1k1s3t1Y0'
  }
]

app.get('/users/riki', (req, res) => {
  res.send(response.user)
})

app.get('/product', (req, res) => {
  res.send(response.product)
})

app.get('/product/list', (req, res) => {
  res.send(response.productList)
})

app.post('/signin/validate', (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)
  
  if (user) {
    res.send(response.loginSuccess)
  } else {
    res.send(response.loginFailed)
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
})

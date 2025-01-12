const express = require('express')
const response = require('./response')

const app = express()
const PORT = 8000

app.get('/users/riki', (req, res) => {
  res.send(response.user)
})

app.get('/product', (req, res) => {
  res.send(response.product)
})

app.post('/signin/validate', (req, res) => {
  if (req.body.username === 'rikisetiyo' && req.body.password === 'rikisetiyo') {
    res.send(response.loginSuccess)
  } else {
    res.send(response.loginFailed)
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
})

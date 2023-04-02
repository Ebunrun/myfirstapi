import express from 'express'
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/login', (req, res) => {
//     res.send('Not authorized')
//   })

// app.get('/logout', (req, res) => {
//     res.send('Logged out')
//   })

app.get('/get-time', (request, response) => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time)
  response.send({ message:`The current time is: ${time}`})
})

app.get('/winner', (req, res) => {
  const winner = { name: 'John Doe', phoneNumber: 08030512688, age: 30 };
  console.log(time)
  res.json(winner);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
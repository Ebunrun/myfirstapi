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
  const winner = [
    { id: 0, name: 'John Olaniyi', email: 'john@olaniyi.com', phone: '08030512688', age: 28 },
    { id: 1, name: 'Ebun Goodness', email: 'ebun@goodness.com', phone: '08030512688', age: 25 },
    { id: 2, name: 'Ayuba Ezekiel', email: 'ayuba@ezekiel.com', phone: '08030512688', age: 30 },
    { id: 3, name: 'Shalom Olamide', email: 'shalom@olamide.com', phone: '08030512688', age: 18 },
    { id: 4, name: 'Chioma Onag', email: 'chioma@onag.com', phone: '08030512688', age: 20 },
    { id: 5, name: 'Terv Igbo', email: 'terve@igbo.com', phone: '08030512688', age: 30 },
    { id: 6, name: 'Esther Babs', email: 'esther@babs.com', phone: '08030512688', age: 35 },
    { id: 7, name: 'Precious Ohio', email: 'precious@ohio.com', phone: '08030512688', age: 19 },
    { id: 8, name: 'Dupe Ehiorobho', email: 'dupe@ehiorobho.com', phone: '08030512688', age: 22 },
    { id: 9, name: 'Destiny Oraifor', email: 'destiny@oraifor.com', phone: '08030512688', age: 31 },
    { id: 10, name: 'Martins Adeoti', email: 'martins@adeoti.com', phone: '08030512688', age: 37 },
  ];
  console.log(winner)
  res.json(winner);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())

const winner = [
  { 
      name: 'Johnson Olaniyi', 
      email: 'john@olaniyi.com', 
      phone: '080305688', 
      age: 28 
  },
    { 
      name: 'Ebun Christiana', 
      email: 'ebun@goodness.com', 
      phone: '0803088', 
      age: 25 
  },
    { 
      name: 'Ayuba Victoria', 
      email: 'ayuba@ezekiel.com', 
      phone: '08030512688', 
      age: 30 
  },
    { 
      name: 'Shalom Olamide', 
      email: 'shalom@olamide.com', 
      phone: '08030512688', age: 18 
  },
    { 
      name: 'Joy Ehi', 
      email: 'chioma@onag.com', 
      phone: '08030512688', 
      age: 20 
  },
    { 
      name: 'Terver Chahur', 
      email: 'terve@igbo.com', 
      phone: '080305126', 
      age: 30 
  },
    { 
      name: 'Esther Babatunde', 
      email: 'esther@babs.com', 
      phone: '080512688', 
      age: 35 
  },
    { 
      name: 'Prech Ohio', 
      email: 'precious@ohio.com', 
      phone: '080388', 
      age: 19 
  },
    { 
      name: 'Dupe Ehiorobho', 
      email: 'dupe@ehiorobho.com', 
      phone: '0830512688', 
      age: 22 
  },
    { 
      name: 'Destiny Oraifor', 
      email: 'destiny@oraifor.com', 
      phone: '0803051268', 
      age: 31 
  },
    { 
      name: 'Martins Adeoti', 
      email: 'martins@adeoti.com', 
      phone: '08030512688', 
      age: 37 
  },
]

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
  console.log(winner)
  res.send(winner)
})

app.get('/random-winner', (req, res) => { 
  let random_winner=Math.floor(Math.random() * 11);
  res.send(winner[random_winner])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const winner = [
  //   { id: 0, name: 'John Olaniyi', email: 'john@olaniyi.com', phone: '08030512688', age: 28 },
  //   { id: 1, name: 'Ebun Goodness', email: 'ebun@goodness.com', phone: '08030512688', age: 25 },
  //   { id: 2, name: 'Ayuba Ezekiel', email: 'ayuba@ezekiel.com', phone: '08030512688', age: 30 },
  //   { id: 3, name: 'Shalom Olamide', email: 'shalom@olamide.com', phone: '08030512688', age: 18 },
  //   { id: 4, name: 'Chioma Onag', email: 'chioma@onag.com', phone: '08030512688', age: 20 },
  //   { id: 5, name: 'Terv Igbo', email: 'terve@igbo.com', phone: '08030512688', age: 30 },
  //   { id: 6, name: 'Esther Babs', email: 'esther@babs.com', phone: '08030512688', age: 35 },
  //   { id: 7, name: 'Precious Ohio', email: 'precious@ohio.com', phone: '08030512688', age: 19 },
  //   { id: 8, name: 'Dupe Ehiorobho', email: 'dupe@ehiorobho.com', phone: '08030512688', age: 22 },
  //   { id: 9, name: 'Destiny Oraifor', email: 'destiny@oraifor.com', phone: '08030512688', age: 31 },
  //   { id: 10, name: 'Martins Adeoti', email: 'martins@adeoti.com', phone: '08030512688', age: 37 },
  // ];
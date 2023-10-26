const path = require('path')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/contacto.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contacto.html'))
})
app.get('/portfolio.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'))
})

app.get('/biografia.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'biografia.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'))
})
app.get('*', (req, res) => {
  res.status(404).send('NOT FOUND')
})
app.listen(4001, () => console.log('Server on...'))

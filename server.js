const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'styles')))
app.use(express.static(path.join(__dirname, 'views')))
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(process.env.PORT || 4000, () => { console.log('server started port 4000') })

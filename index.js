const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const port = process.env.PORT || 3002
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getNames = (request, response) => {
  pool.query('SELECT * FROM names', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addName = (request, response) => {
  const { name, age } = request.body

  pool.query('INSERT INTO names (name, age) VALUES ($1, $2)', [name, age], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'name added.' })
  })
}

app
  .route('/name')
  .get(getNames)
  .post(addName)

// Start
app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`)
})
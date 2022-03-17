const express = require('express')
const product = express()
const database = require('../Database')

product.get('/getCategories', (req, res) => {
  console.log('GETTING CATEGORIES')

  let appData = {
    isError: false,
    data: [],
  }
  database.connection.getConnection((err, connection) => {
    console.log('in  database.connection.getConnection')
    if (err) {
      appData.isError = true
      appData.data = err
      res.status(500).json(appData)
    } else {
      connection.query('Select * from categories', (error, rows) => {
        if (error) {
          console.log('FAILED')
          appData.isError = true
          appData.data = err
          res.status(500).json(appData)
        } else {
          console.log('SUCCESS')
          appData.data = rows
          console.log('appData.data', appData.data)
          res.status(200).json(appData)
        }
      })
    }
  })
})

module.exports = product

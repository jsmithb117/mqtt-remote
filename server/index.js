const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../client/build'))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

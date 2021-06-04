import express from 'express'
const app = express()
app.use(express.static('./public'))
app.listen(31634)
console.log('server started on http://localhost:31634')
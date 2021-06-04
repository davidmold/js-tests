import express from 'express'
const app = express()
const port = 31634
app.use(express.static('./public'))
app.listen(port)
console.log(`server started on http://localhost:${port}`)
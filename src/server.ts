import express, { request, response } from "express"

const app = express()
app.use(express.json())

app.get('/test', (request, response) => {
  request.body
  return response.send("OLa mundo ")
})

app.post('/test1', (request, response) => {
  return response.send('teste1')
})
app.listen(3000, () => console.log(`Server running`))
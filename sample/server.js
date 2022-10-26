let express = require('express')
let mongoose = require('mongoose')

let app = express()

mongoose.connect('mongodb://localhost:27017/weather', (err) => { 
    console.log(err?err:'sucessfully connected')
})


app.get('/', (req,res) => { 
res.send('welcome')
})
app.listen(4000, () => {
  console.log('server listing port 4000')
})
 
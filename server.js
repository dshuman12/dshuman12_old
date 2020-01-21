const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.use('/views/', express.static('./views'));
app.use('/public/images/', express.static('./public/images'));

app.get('/', function (req, res) {
    res.render('index');
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
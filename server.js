var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const path = require('path');

var app = express();
app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res) {
  app.use(express.static('views'));
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/get-file-size', upload.single('file'), function(req, res) {
  var file = req.file;
  res.json({size: file.size});
})

app.listen(app.get('port'), function() {
  console.log('File-Metadata app listening on port ' + app.get('port'));
})

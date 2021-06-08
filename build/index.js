'use strict';
const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const fileVerifier_1 = __importDefault(require('./utilities/fileVerifier'));
const app = express_1.default();
const port = 3000;
const inputFile = './full/fjord.jpg';
app.get('/convert', function(req, res) {
  res.send('convert been accessed!');
});
// start the Express server
app.listen(port, function() {
  console.log('server started at http://localhost:' + port);
});
app.get('/dos/images', function(req, res) {
  const val = fileVerifier_1.default(inputFile);
  res.send(val);
});

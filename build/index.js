'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var imageRoute_1 = __importDefault(require('./utilities/Router/imageRoute'));
var ImageError_1 = __importDefault(
  require('./utilities/ErrorHandling/ImageError')
);
var app = express_1.default();
var port = 3000;
//image resizing router
app.use('/api/images', imageRoute_1.default);
//error handling middleware
app.use('/', ImageError_1.default);
// start the Express server
app.listen(port, function() {
  console.log('server started at http://localhost:' + port);
});
exports.default = app;

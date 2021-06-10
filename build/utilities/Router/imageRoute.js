"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    var _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
    res.send(filename + ", " + width + ", " + height);
});
exports.default = router;

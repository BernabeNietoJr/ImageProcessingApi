"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import imageRoute from './Router/imageFile';
var ImageInputFolder = '../full/';
var loggerFunction = function (req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
};
var processImageFileFunction = function (req, res, next) {
    var imageFile = "";
    next();
};

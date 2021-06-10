"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ImageApiError = /** @class */ (function (_super) {
    __extends(ImageApiError, _super);
    function ImageApiError(message, status) {
        var _this = _super.call(this) || this;
        _this.message = message;
        return _this;
        // --this.statusCode = status;
    }
    return ImageApiError;
}(Error));
exports.default = ImageApiError;

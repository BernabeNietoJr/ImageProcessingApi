'use strict';
const __extends =
  (this && this.__extends) ||
  (function() {
    let extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (const p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
const jasmine_spec_reporter_1 = require('jasmine-spec-reporter');
const CustomProcessor = /** @class */ (function(_super) {
  __extends(CustomProcessor, _super);
  function CustomProcessor() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CustomProcessor.prototype.displayJasmineStarted = function(info, log) {
    return 'TypeScript ' + log;
  };
  return CustomProcessor;
})(jasmine_spec_reporter_1.DisplayProcessor);
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new jasmine_spec_reporter_1.SpecReporter({
    spec: {
      displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor]
  })
);

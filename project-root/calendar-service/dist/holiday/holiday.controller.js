"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayController = void 0;
const common_1 = require("@nestjs/common");
let HolidayController = (() => {
    let _classDecorators = [(0, common_1.Controller)('holiday')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getHolidays_decorators;
    let _addHoliday_decorators;
    let _deleteHoliday_decorators;
    var HolidayController = _classThis = class {
        constructor(holidayService) {
            this.holidayService = (__runInitializers(this, _instanceExtraInitializers), holidayService);
        }
        getHolidays() {
            return __awaiter(this, void 0, void 0, function* () {
                // Логика получения списка праздников
                return this.holidayService.getHolidays();
            });
        }
        addHoliday(body) {
            return __awaiter(this, void 0, void 0, function* () {
                // Логика добавления праздника
                yield this.holidayService.addHoliday(body);
                return { message: 'Holiday added successfully' };
            });
        }
        deleteHoliday(body) {
            return __awaiter(this, void 0, void 0, function* () {
                // Логика удаления праздника
                yield this.holidayService.deleteHoliday(body.id);
                return { message: 'Holiday deleted successfully' };
            });
        }
    };
    __setFunctionName(_classThis, "HolidayController");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getHolidays_decorators = [(0, common_1.Get)('list')];
        _addHoliday_decorators = [(0, common_1.Post)('add')];
        _deleteHoliday_decorators = [(0, common_1.Delete)('delete')];
        __esDecorate(_classThis, null, _getHolidays_decorators, { kind: "method", name: "getHolidays", static: false, private: false, access: { has: obj => "getHolidays" in obj, get: obj => obj.getHolidays }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _addHoliday_decorators, { kind: "method", name: "addHoliday", static: false, private: false, access: { has: obj => "addHoliday" in obj, get: obj => obj.addHoliday }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteHoliday_decorators, { kind: "method", name: "deleteHoliday", static: false, private: false, access: { has: obj => "deleteHoliday" in obj, get: obj => obj.deleteHoliday }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HolidayController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HolidayController = _classThis;
})();
exports.HolidayController = HolidayController;

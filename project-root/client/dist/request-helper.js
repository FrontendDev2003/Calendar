"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkingHours = exports.addHoliday = exports.getHolidays = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
function getHolidays() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`${config_1.config.baseUrl}/holiday/list`);
        return response.data;
    });
}
exports.getHolidays = getHolidays;
function addHoliday(date) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.post(`${config_1.config.baseUrl}/holiday/add`, { date });
        return response.data;
    });
}
exports.addHoliday = addHoliday;
function getWorkingHours(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(`${config_1.config.baseUrl}/working-hour/get`, {
            params: { month },
        });
        return response.data;
    });
}
exports.getWorkingHours = getWorkingHours;

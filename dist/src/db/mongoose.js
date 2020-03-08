"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var connectionUrl = "mongodb+srv://patogtzc:" + `${process.env.DBPASSWORD}` + "@cluster0-pia7w.mongodb.net/caso_sintec?retryWrites=true&w=majority";
console.log(process.env.DBPASSWORD);
mongoose_1.default.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose_1.default.set('useFindAndModify', false);
//# sourceMappingURL=mongoose.js.map
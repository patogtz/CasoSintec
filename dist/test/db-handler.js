"use strict";
// tests/db-handler.js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
/**
 * Connect to the in-memory database.
 */
module.exports.connect = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = yield mongod.getConnectionString();
    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };
    yield mongoose.connect(uri, mongooseOpts);
});
/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connection.dropDatabase();
    yield mongoose.connection.close();
    yield mongod.stop();
});
/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        yield collection.deleteMany();
    }
});
//# sourceMappingURL=db-handler.js.map
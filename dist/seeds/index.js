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
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("@config/connection");
const data_1 = require("@seeds/data");
const cleanDB_1 = require("@seeds/cleanDB");
console.log('Current Working Directory:', process.cwd());
try {
    console.log('Resolved Paths:', {
        seedData: require.resolve('@seeds/data'),
        cleanDatabase: require.resolve('@seeds/cleanDB'),
        connectToDatabase: require.resolve('@config/connection')
    });
}
catch (err) {
    console.error('Error resolving paths:', err);
}
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.connectToDatabase)();
        yield (0, cleanDB_1.cleanDatabase)();
        yield (0, data_1.seedData)();
        console.log('Database seeding complete!');
    }
    catch (err) {
        console.error('Error seeding database:', err);
    }
});
seedDatabase();

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
exports.seedData = void 0;
const models_1 = require("../../src/models"); // Adjust the path as needed
const seedData = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = [
    // Add your sample user data here
    ];
    const thoughts = [
    // Add your sample thoughts data here
    ];
    const reactions = [
    // Add your sample reactions data here
    ];
    const friends = [
    // Add your sample friends data here
    ];
    // Insert data into the database
    yield models_1.User.insertMany(users);
    yield models_1.Thought.insertMany(thoughts);
    yield models_1.Reaction.insertMany(reactions);
    yield models_1.Friend.insertMany(friends);
    console.log('Data seeding complete!');
});
exports.seedData = seedData;

"use strict";
// dateFormat.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
const dateFormat = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
};
exports.dateFormat = dateFormat;

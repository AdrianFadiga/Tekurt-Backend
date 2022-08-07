"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const excludeField_1 = require("../utils/excludeField");
let UserModel = class UserModel {
    constructor(database) {
        this.database = database;
    }
    async read() {
        const users = await this.database.user.findMany();
        users.map((user) => (0, excludeField_1.excludeField)(user, 'password'));
        return users;
    }
    async readOne(id) {
        const user = await this.database.user.findUnique({
            where: { id }
        });
        user === null || user === void 0 ? true : delete user.password;
        return user;
    }
    async update(id, dto) {
        await this.database.user.update({
            where: { id },
            data: Object.assign({}, dto)
        });
    }
    async delete(id) {
        await this.database.user.delete({
            where: { id }
        });
    }
};
UserModel = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map
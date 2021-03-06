"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const database_module_1 = require("../database/database.module");
const passport = require("passport");
const constants_1 = require("@centrifuge/gateway-lib/utils/constants");
const centrifuge_module_1 = require("../centrifuge-client/centrifuge.module");
const auth_module_1 = require("../auth/auth.module");
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(passport.authenticate('local'))
            .forRoutes(`${constants_1.ROUTES.USERS.login}`);
    }
};
UsersModule = __decorate([
    common_1.Module({
        controllers: [users_controller_1.UsersController],
        providers: [],
        imports: [database_module_1.DatabaseModule, auth_module_1.AuthModule, centrifuge_module_1.CentrifugeModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
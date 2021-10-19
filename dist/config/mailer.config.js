"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerConfig = void 0;
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const path = require("path");
exports.mailerConfig = {
    template: {
        dir: path.resolve(__dirname, "..", "templates"),
        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
        options: {
            strict: true,
            extName: ".hbs",
            layoutsDir: path.resolve(__dirname, "..", "templates"),
        },
    },
    transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: 'haroldorodsilva@gmail.com',
            pass: 'K3ll1h@acker',
        },
    },
    defaults: {
        from: '"No Reply" <noreply@example.com>',
    },
};
//# sourceMappingURL=mailer.config.js.map
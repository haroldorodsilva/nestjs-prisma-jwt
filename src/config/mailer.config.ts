import { MailerOptions } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";

import * as path from "path";

export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, "..", "templates"),
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
      extName: ".hbs",
      layoutsDir: path.resolve(__dirname, "..",  "templates"),
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

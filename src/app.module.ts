import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";

// import { mailerConfig } from "./config/mailer.config";
// import { MailerModule } from "@nestjs-modules/mailer";
// MailerModule.forRoot(mailerConfig)


@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

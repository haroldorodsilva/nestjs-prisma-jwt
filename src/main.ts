import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { YupValidationPipe } from "./common/pipes/yup-validation.pipe";
import { PrismaService } from "./modules/prisma/prisma.service";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const config = new DocumentBuilder()
    .setTitle("NutriAPI")
    .setDescription("Api para atendimento nutricional")
    .setVersion("1.0")
    .addTag("nutrition")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  app.useGlobalPipes(...[new YupValidationPipe()]);

  await app.listen(3000);
}

bootstrap();

// logs https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-4-adicionando-logs-%C3%A0-nossa-aplica%C3%A7%C3%A3o-576ce4f9cc52

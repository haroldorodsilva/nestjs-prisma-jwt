"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const yup_validation_pipe_1 = require("./common/pipes/yup-validation.pipe");
const prisma_service_1 = require("./modules/prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    prismaService.enableShutdownHooks(app);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("NutriAPI")
        .setDescription("Api para atendimento nutricional")
        .setVersion("1.0")
        .addTag("nutrition")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("swagger", app, document);
    app.useGlobalPipes(...[new yup_validation_pipe_1.YupValidationPipe()]);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
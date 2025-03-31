import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./server/app.controller";
// Import your controllers, services, etc.

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

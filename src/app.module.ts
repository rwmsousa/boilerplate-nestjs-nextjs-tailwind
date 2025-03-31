import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// Import your controllers, services, etc.

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

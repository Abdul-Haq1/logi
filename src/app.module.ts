import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ShortLinkModule } from './short-link/short-link.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your-postgres-username',
      password: 'your-postgres-password',
      database: 'your-database-name',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    ShortLinkModule,
    AnalyticsModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '48h' },
    }),
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
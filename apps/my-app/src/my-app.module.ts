import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { DatabaseModule } from '@app/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule {}

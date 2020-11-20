import { Landlord } from './entity/landlord.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LandlordResolver } from './landlord.resolver';
import { LandlordService } from './landlord.service';

@Module({
  imports: [TypeOrmModule.forFeature([Landlord])],
  providers: [LandlordResolver, LandlordService],
})
export class LandlordModule {}

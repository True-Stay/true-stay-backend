import { LandlordInput } from './input/landlord.input';
import { Landlord } from './entity/landlord.entity';
import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LandlordService {
  // constructor(
  //   @InjectModel('Account') private readonly accountModel: Model<Account>,
  // ) {}
  constructor(
    @InjectRepository(Landlord)
    private readonly LandlordRepository: MongoRepository<Landlord>,
  ) {}

  // async create(createAccountDto: AccountInput): Promise<Account> {
  //   const createAccount = new this.accountRepository(createAccountDto);
  //   return await createAccount.save();
  // }
  async create(input: LandlordInput): Promise<Landlord> {
    //TODO stripe code should be auto generated

    //TODO Avatar should be stored in the database

    const landlord = new Landlord();
    // console.log(input.skills);
    landlord.name = input.name;
    landlord.address = input.address;
    landlord.city = input.city;
    landlord.postalCode = input.postalCode;
    // landlord.businessPhoneNumber = input.businessPhoneNumber;
    // landlord.skills = input.skills;
    // landlord.stripeId = 'gjhv';
    return this.LandlordRepository.save(landlord);
  }

  async findAll(): Promise<Landlord[]> {
    return await this.LandlordRepository.find();
  }
}

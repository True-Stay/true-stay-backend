import { Account } from './entity/account.entity';
// import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

// import { InjectModel } from '@nestjs/mongoose';
// import { Account } from './interfaces/account.interface';
import { AccountInput } from './inputs/account.input';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: MongoRepository<Account>,
  ) {}
  async create(input: AccountInput): Promise<Account> {
    //TODO invite code should be auto generated

    const account = new Account();

    account._id = uuid.v4();
    // account.firstName = input.firstName;
    // account.lastName = input.firstName + '73r3c';
    account.email = input.email;
    account.phoneNumber = input.phoneNumber;
    account.password = input.password;
    return this.accountRepository.save(account);
  }

  async findAll(): Promise<Account[]> {
    return await this.accountRepository.find();
  }
}

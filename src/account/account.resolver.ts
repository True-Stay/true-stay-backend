import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { AccountType } from './dto/create-account.dto';
import { AccountInput } from './inputs/account.input';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [AccountType])
  async accounts() {
    return this.accountService.findAll();
  }

  @Mutation(() => AccountType)
  async createAccount(@Args('input') input: AccountInput) {
    return this.accountService.create(input);
  }
}

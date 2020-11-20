import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class LandlordType {
  @Field(() => ID)
  _id: string;
  @Field()
  name: string;
  @Field()
  address: string;
  @Field()
  city: string;
  @Field()
  postalCode: string;
  // @Field()
  // businessAddress: string;
  // @Field(() => [String])
  // skills: [String];
  // @Field()
  // avatar: string;
  // @Field()
  // isLocked: boolean;
  // @Field()
  // createdAt: Date;
  // @Field()
  // isActive: boolean;
  // @Field()
  // isVerified: boolean;
  // @Field()
  // subscriptionType: string;
  // @Field()
  // stripeId: string;
}

// export class Landlord {
//     @ObjectIdColumn()
//     _id: string;
//     @Column()
//     businessName: string;
//     @Column()
//     businessCategory: string;
//     @Column()
//     businessDescription: string;
//     @Column()
//     businessPhone: string;
//     @Column()
//     businessAddress: string;
//     @Column()
//     skills: string;
//     @Column()
//     avatar: string;
//     @Column()
//     isLocked: boolean;
//     @Column()
//     reason: string;
//     @Column()
//     createdAt: number;
//     @Column()
//     isActive: boolean;
//     @Column()
//     isVerified: string;
//     @Column()
//     subscriptionType: string;
//     @Column()
//     stripeId: string | number;

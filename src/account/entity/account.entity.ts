import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @ObjectIdColumn()
  _id: string;
  // @Column()
  // firstName: string;
  // @Column()
  // lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phoneNumber: string;
}

import {Entity, Column, PrimaryGeneratedColumn, Timestamp, Long} from 'typeorm'

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column()
  token: string;

  @Column()
  lastTimestamp: number;

  @Column()
  hostName: string;

  @Column()
  createdTimestamp: number;

}
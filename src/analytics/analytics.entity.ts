import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnalyticsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //@Column()

  // other entity properties...
}
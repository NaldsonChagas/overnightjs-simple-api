import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"
import {IsNotEmpty, IsString, Length, Max, Min} from "class-validator"

@Entity()
export class Person  {

  @PrimaryGeneratedColumn()
  private readonly id: number

  @Column({
    type: 'varchar',
    length: 70,
    nullable: false,
  })
  @Length(2, 70)
  @IsString()
  private name: string

  @Column({
    type: 'varchar',
    length: 14,
    unique: true,
    nullable: false
  })
  @IsString()
  @IsNotEmpty()
  private cpf: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  @IsNotEmpty()
  @Min(12)
  @Max(111)
  private age: number

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  constructor(name: string, cpf: string, age: number, id?: number) {
    this.name = name
    this.cpf = cpf
    this.age = age
    this.id = id || this.id
  }
}

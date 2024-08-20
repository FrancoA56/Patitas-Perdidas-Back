import {
  Model,
  Column,
  Table,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { Animal } from "./animals";

@Table
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;
  
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @HasMany(() => Animal)
  animals!: Animal[];
}

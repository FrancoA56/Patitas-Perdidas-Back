import {
  Model,
  Column,
  Table,
  DataType,
  HasMany,
} from "sequelize-typescript";
import Animal from "./animals";

@Table
export default class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;
  
  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  phone?: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isBan!: boolean;

  @HasMany(() => Animal)
  animals!: Animal[];
}

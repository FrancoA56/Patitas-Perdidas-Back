import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { User } from "./user";
import { Image } from "./animalsImage";

// Enums.ts
export enum AnimalColors {
  BLACK = "black",
  WHITE = "white",
  BROWN = "brown",
  GRAY = "gray",
  BEIGE = "beige",
  ORANGE = "orange",
  GREEN = "green",
  RED = "red",
  BLUE = "blue",
  OTHER = "other",
}

export enum AnimalType {
  DOG = "dog",
  CAT = "cat",
  OTHER = "other",
}

export enum AnimalStatus {
  FOUND = "found",
  MISSING = "missing",
  ADOPTION = "adoption",
}

@Table
export class Animal extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 20],
    },
  })
  name!: string;

  @Column({
    type: DataType.ENUM("Months", "Years"),
    allowNull: false,
  })
  ageSize!: "Months" | "Years";

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: "street",
  })
  breed!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column({
    type: DataType.ENUM(...Object.values(AnimalColors)),
    defaultValue: AnimalColors.OTHER,
    allowNull: false,
  })
  colors!: AnimalColors;

  @Column({
    type: DataType.ENUM(...Object.values(AnimalType)),
    defaultValue: AnimalType.CAT,
    allowNull: false,
  })
  type!: AnimalType;

  @Column({
    type: DataType.ENUM(...Object.values(AnimalStatus)),
    defaultValue: AnimalStatus.MISSING,
    allowNull: false,
  })
  status!: AnimalStatus;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  dayMissing!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  placeMissing!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  googleMapLink?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  reunited!: boolean;

  @HasMany(() => Image)
  images!: Image[];
}

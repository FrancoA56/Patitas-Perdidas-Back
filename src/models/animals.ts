import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany
} from "sequelize-typescript";
import User from "./user";
import AnimalImage from "./animalImage"; // Tabla para almacenar las imágenes del animal
import { AnimalColors, AnimalType, AnimalStatus } from "../utils/enums";

@Table
export default class Animal extends Model<Animal> {
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
    type: DataType.DATEONLY, // Almacena la fecha de nacimiento para calcular la edad.
    allowNull: false,
  })
  birthdate!: string;

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
    type: DataType.ARRAY(DataType.ENUM(...Object.values(AnimalColors))), // Permite múltiples colores usando ARRAY.
    allowNull: false,
    defaultValue: [AnimalColors.OTHER],
  })
  colors!: AnimalColors[];

  @Column({
    type: DataType.ENUM(...Object.values(AnimalType)),
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
    allowNull: true,
  })
  dayMissing?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  placeMissing?: string;

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

  @HasMany(() => AnimalImage) // Relación de uno a muchos con la tabla de imágenes.
  images!: AnimalImage[];
}

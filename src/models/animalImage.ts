import {
    Model,
    Column,
    Table,
    DataType,
    ForeignKey,
    BelongsTo
  } from "sequelize-typescript";
  import Animal from "./animals";
  
  @Table
  export default class AnimalImage extends Model<AnimalImage> {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id!: number;
  
    @ForeignKey(() => Animal)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    animalId!: number;
  
    @BelongsTo(() => Animal)
    animal!: Animal;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    imageUrl!: string; // URL de la imagen del animal.
  }
  
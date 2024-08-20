import { Model, Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Animal } from './animals';

@Table
export class Image extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    imageUrl!: string;

    @ForeignKey(() => Animal)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    animalId!: number;

    @BelongsTo(() => Animal)
    animal!: Animal;
}

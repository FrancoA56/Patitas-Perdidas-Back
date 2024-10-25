import { Animal } from "../../db";
import { AnimalColors, AnimalType, AnimalStatus } from "../../utils/enums";

interface AnimalInput {
  name: string;
  ageSize: "Months" | "Years";
  age: number;
  breed: string;
  colors: AnimalColors[];
  type: AnimalType;
  status: AnimalStatus;
  dayMissing: string;
  placeMissing: string;
  googleMapLink?: string;
  image: string;
  userId: number;
}

export const addAnimalHandler = async (animalData: AnimalInput): Promise<InstanceType<typeof Animal>> => {
  const {
    name,
    ageSize,
    age,
    breed,
    colors,
    type,
    status,
    dayMissing,
    placeMissing,
    googleMapLink,
    image,
    userId,
  } = animalData;

  // Validación de los datos requeridos
  if (
    !name ||
    !ageSize ||
    !age ||
    !breed ||
    !colors ||
    !type ||
    !status ||
    !dayMissing ||
    !placeMissing ||
    !image ||
    !userId
  ) {
    throw new Error("Faltan datos para crear el animal");
  }

  // Crear el nuevo animal en la base de datos
  const newAnimal = await Animal.create({
    name,
    ageSize,
    age,
    breed,
    colors, // Sequelize manejará el array correctamente si está configurado
    type,
    status,
    dayMissing,
    placeMissing,
    googleMapLink: googleMapLink || null, // Opcional
    reunited: false, // Siempre false al crear
    image,
    userId,
  });

  return newAnimal;
};
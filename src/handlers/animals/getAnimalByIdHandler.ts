import { Animal } from "../../db";
import { AnimalColors, AnimalType, AnimalStatus } from "../../utils/enums";

interface AnimalInfo {
  id: number;
  name: string;
  ageSize: "Months" | "Years";
  age: number;
  breed: string;
  userId: number;
  colors: AnimalColors[];
  type: AnimalType;
  status: AnimalStatus;
  dayMissing: string;
  placeMissing: string;
  googleMapLink?: string;
  reunited: boolean;
  image: string;
}

export const getAnimalByIdHandler = async (
  id: number | undefined
): Promise<AnimalInfo> => {
  if (!id) throw new Error("Missing id");

  
  // Buscar el animal por ID y tipar correctamente el resultado
  const animal = await Animal.findOne({
    where: { id },
    include: [{ all: true }],
  });

  if (!animal) throw new Error("Animal not found with the specified id");

  // Extraer los datos del animal
  const {
    id: animalId,
    name,
    ageSize,
    age,
    breed,
    userId,
    colors,
    type,
    status,
    dayMissing,
    placeMissing,
    googleMapLink,
    reunited,
    image,
  } = animal.get();

  // Crear el objeto de respuesta
  const animalInfo: AnimalInfo = {
    id: animalId,
    name,
    ageSize: ageSize as "Months" | "Years",
    age,
    breed,
    userId,
    colors: colors as AnimalColors[],
    type: type as AnimalType,
    status: status as AnimalStatus,
    dayMissing,
    placeMissing,
    googleMapLink: googleMapLink || undefined,
    reunited,
    image,
  };

  return animalInfo;
};

export default getAnimalByIdHandler;

import {AnimalPicture, TFragment} from '../types';

// использую type predicate для определения типа элементов массива с фрагментами
export const isTypeFragment = (fragment: TFragment | {}): fragment is TFragment => {
  return (
    (fragment as TFragment).fragmentSrc !== undefined && (fragment as TFragment).id !== undefined
  );
}

export const defineArrayPartsNumber = (imageName: string) => {
  if (imageName === AnimalPicture.FOX) {
    return 24;
  } else if (imageName === AnimalPicture.BEAR) {
    return 36;
  } else return 0;
}

export const getRandomImage = () => {
  const possibleImagesArray = Object.values(AnimalPicture);
  let randIndex = Math.floor(Math.random() * possibleImagesArray.length);
  console.log(possibleImagesArray[randIndex])
  return possibleImagesArray[randIndex];
}
export type TFragment = {
  fragmentSrc: string;
  id: number;
}

export type TFragmentsArray = Array<TFragment | {}>

export type TPuzzleContainer = {
  fragments: TFragmentsArray;
  draggedFragments: TFragmentsArray;
  handleDropFragment: (item: TFragment, draggingFragmentIndex: number) => void;
  handleDropFragmentBack: (item: TFragment) => void;
  imageName: string
}

export enum AnimalPicture {
  FOX = 'fox',
  BEAR = 'bear'
}


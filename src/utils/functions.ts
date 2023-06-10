import {TFragment} from '../types';

// использую type predicate для определения типа элементов массива с фрагментами
export const isTypeFragment = (fragment: TFragment | {}): fragment is TFragment => {
  return (
    (fragment as TFragment).fragmentSrc !== undefined && (fragment as TFragment).id !== undefined
  );
}
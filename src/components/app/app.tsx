import React, {useEffect, useState} from 'react';

import mainStyles from './app.module.css';

import {Header} from '../header/header';
import {PuzzleContainer} from '../puzzle-container/puzzle-container';
import {Button} from '../button/button';
import {Popup} from '../popup/popup';

import {TFragment, TFragmentsArray} from '../../types';

import {defineArrayPartsNumber, getRandomImage, isTypeFragment} from '../../utils/functions';

export const App = () => {
  const [fragments, setFragments] = useState<TFragmentsArray>([]);
  const [initialImage, setInitialImage] = useState<string>('');
  const [initialArrayLength, setInitialArrayLength] = useState<number>(0);
  const [draggedFragments, setDraggedFragments] = useState<TFragmentsArray>([]);
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

  let randomImage = 'bear'
  let arrayLength

  const fragmentsInitialState = [...Array(initialArrayLength)]
    .map((fragment, index) => ({
      fragmentSrc: `image_part_${index}.jpg`,
      id: index
    }))
    .sort(() => Math.random() - 0.5);
  console.log(fragmentsInitialState)

  const emptyPuzzleData = [...Array(initialArrayLength)].map(() => ({}))

  const handleDropFragment = (item: TFragment, draggingFragmentIndex: number) => {
    setFragments([
      ...fragments.filter((fragment) => {
        if (isTypeFragment(fragment)) {
          return fragment.id !== item.id
        }
      })
    ]);

    setDraggedFragments(draggedFragments.map((dropTargetFragment, dropTargetFragmentIndex) => {
      // Запретить копирование фрагмента, перетаскиваемого внутри фрейма с финальным пазлом:
      if (isTypeFragment(dropTargetFragment) && (dropTargetFragment.id === item.id)) return {};
      // Сравниваем правую часть (final image) при отрисовке с самой собой при перетягивании.
      // Если индекс при переборе при отрисовке (т.е. тот фрагмент, на который кидается item) совпадает
      // с индексом при переборе во время handleDrop, вместо бывшего на этом месте пустого места отрисовывается item
      if (dropTargetFragmentIndex === draggingFragmentIndex) {
        return item
      } else return dropTargetFragment
    }));
  };

  const handleDropFragmentBack = (item: TFragment) => {
    setFragments([
      ...fragments,
      ...draggedFragments.filter((fragment) => {
        if (isTypeFragment(fragment)) {
          return fragment.id === item.id
        }
      })
    ]);

    setDraggedFragments(draggedFragments.map((dropTargetFragment) => {
      if (isTypeFragment(dropTargetFragment) && dropTargetFragment.id === item.id) {
        return {}
      } else return dropTargetFragment
    }))
  }

  const onOpenPopup = () => {
    setPopupIsOpen(true);
    // запрещаем прокрутку страницы во время открытия попапа
    document.body.classList.add(mainStyles.bodyOverlay);
  }

  const onClosePopup = () => {
    setPopupIsOpen(false);
    // разрешаем прокрутку страницы при закрытии попапа
    document.body.classList.remove(mainStyles.bodyOverlay);
  }

  const setInitialState = () => {
    setFragments(fragmentsInitialState);
    // Делаем ранее пустой <ul>, НЕпустым (т.е. содержащим просто много <li></li>) - чтобы сделать каждый из li dropTarget-ом
    setDraggedFragments([...emptyPuzzleData]);

  }

  useEffect(() => {
    // randomImage = getRandomImage();
    // arrayLength = defineArrayPartsNumber(randomImage);
    setInitialState();
    setInitialImage(getRandomImage);
    setInitialArrayLength(defineArrayPartsNumber(initialImage))
    console.log(initialArrayLength)
  }, []);

  return (
    <>
      <Header/>
      <main className={mainStyles.container}>
        <section className={mainStyles.buttonsWrap}>
          <Button buttonName="Как играть" onClickHandler={onOpenPopup}/>
          <Button buttonName="Сбросить" onClickHandler={() => setInitialState()}/>
          <Button buttonName="Сменить картинку" onClickHandler={() => console.log('hi')}/>
        </section>
        <PuzzleContainer fragments={fragments}
                         draggedFragments={draggedFragments}
                         handleDropFragment={handleDropFragment}
                         handleDropFragmentBack={handleDropFragmentBack}
                         imageName={initialImage}
        />
      </main>
      {
        popupIsOpen &&
        <Popup onClosePopup={onClosePopup}/>
      }
    </>
  )
}
import {useDrag} from 'react-dnd';
import {TFragment} from '../types';

// export const dragRef = (fragment: TFragment) => {
//   const [{isDragging}, dragRef] = useDrag({
//     type: 'fragment',
//     item: fragment,
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     })
//   });
//   return {isDragging, dragRef}
// }
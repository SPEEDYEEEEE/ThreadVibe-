import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({type, title, customStyles, handleClick}) => {

  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      }
    } else if (type === 'outline') {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color,
      }
    }
  };

  const snap = useSnapshot(state);


  return (
    <button className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton
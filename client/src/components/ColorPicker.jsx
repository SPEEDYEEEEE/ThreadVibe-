import React from 'react';
import {SketchPicker} from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#99FFFF', '#00FFCC', '#9966CC', '#00CCCC', '#666699', '#66FFCC', '#CCCCFF', '#6699CC', '#00CC99', '#3366CC']}
        onChange={(color) => {
          state.color = color.hex;
        }}
      />
    </div>
  )
}

export default ColorPicker
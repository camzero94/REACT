import { useState } from 'react';
import Todo from './Todo';

function Modal(props) {
  return (
    <div>
      <div className='modal'>
        <p>Are You Sure ?</p>
        <button className='btn btn--alt' onClick={props.onCancel}>
          Cancel
        </button>
        <button className='btn' onClick={props.onCancel}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;

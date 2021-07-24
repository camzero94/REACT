import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  //modalIsOpen = True or false depende on inside function useState()
  //setModalOpen = is a function that change value of modalIsOpen
  const [modalIsOpen, setModalOpen] = useState(false);

  const deleteHandler = function () {
    setModalOpen(true);
  };
  function closeModalHandler() {
    setModalOpen(false);
  }
  return (
    <div>
      <h1>My Todo </h1>
      <div className='card'>
        <h2>{props.text} </h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {/*When modalIsOpen is true then show modal and backdrop */}
        {modalIsOpen ? <Modal onCancel={closeModalHandler} /> : null}
        {modalIsOpen ? <Backdrop onClose={closeModalHandler} /> : null}
      </div>
    </div>
  );
}

export default Todo;

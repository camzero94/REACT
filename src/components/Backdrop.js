function Backdrop(props) {
  // Create an atribute onClick inside the <div
  //Every component should be costumize because
  // is not an in-built component like <div
  return <div className='backdrop' onClick={props.onClose} />;
}

export default Backdrop;

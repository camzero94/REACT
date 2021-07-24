function Todo(props) {
  const deleteHandler = function () {
    console.log('Clicked', props.text);
  };
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
      </div>
    </div>
  );
}

export default Todo;

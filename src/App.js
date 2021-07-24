import Todo from './components/Todo';

function App() {
  return (
    <div>
      <div className='title'>
        <h1>App My Todos</h1>
      </div>
      <div className='container'>
        <Todo text='Learn React' />
        <Todo text='Master React' />
        <Todo text='Discover React' />
        <Todo text='Explore React' />
      </div>
    </div>
  );
}

export default App;

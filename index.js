function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])
//add items
  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text:value, isCompleted:false}];
    setTodos(newTodos);
    setValue('');
  }
//remove todo items
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  } 
  return(
    <>
      {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}</div>)}
        <form onSubmit={handleSubmit}>
          <input 
                type="text"
                claseName="input"
                value={value}
                placeholder="Add Task..."
                onChange={e => setValue(e.target.value)}
                />
        </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

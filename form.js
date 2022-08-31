function TodoForm({addTodo}) {
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
      }

    return (
        <>
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
     ) ;

}
import TodoItem from '../TodoItem/TodoItem'
import datenbank from '../../assets/data.js'

const TodoList = () => {
  return (
    <section>
      <h1>My Todos</h1>
      <ul>
        <TodoItem listItem={datenbank[0].item} />
        <TodoItem listItem={datenbank[1].item} />
        <TodoItem listItem={datenbank[2].item} />
        <TodoItem listItem={datenbank[3].item} />
        <TodoItem listItem={datenbank[4].item} />
      </ul>
    </section>
  )
}

export default TodoList

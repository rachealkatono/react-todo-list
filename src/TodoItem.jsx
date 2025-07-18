export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)} // ✅ handle toggle
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} // ✅ handle delete
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
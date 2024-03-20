import React from "react";
import { connect } from "react-redux";
import { removeTodos, completeTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  return (
    <div className="displaytodos">
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => (
            <li key={item.id} className={`card ${item.completed ? 'completed-task' : ''}`}>
              <div>{item.task}</div>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.phone}</div>
              <div className="btns">
                {!item.completed && (
                  <button onClick={() => props.completeTodo(item.id)}>
                    Mark Completed
                  </button>
                )}
                <button onClick={() => props.removeTodo(item.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

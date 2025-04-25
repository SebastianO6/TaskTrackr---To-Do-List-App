import React from 'react';

const TaskTable = ({ tasks, deleteTask }) => {
  if (!Array.isArray(tasks)) {
    return (
      <div className="task-table-container">
        <h3 className="table-title">Task List</h3>
        <p>No tasks to display.</p>
      </div>
    );
  }

  
  return (
    <div className="task-table-container">
      <h3 className="table-title">Task List</h3>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;

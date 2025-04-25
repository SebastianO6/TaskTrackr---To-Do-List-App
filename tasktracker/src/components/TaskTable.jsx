import React from 'react';

const TaskTable = ({ tasks, deleteTask }) => {
  // Add a check to ensure tasks is an array before mapping
  if (!Array.isArray(tasks)) {
    return (
      <div>
        <h3 className="table-title">Task List</h3>
        <p>No tasks to display.</p> {/* Or a message like "Loading tasks..." */}
      </div>
    );
  }

  return (
    <div>
      <h3 className="table-title">Task List</h3>
      <table>
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
                <button onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;

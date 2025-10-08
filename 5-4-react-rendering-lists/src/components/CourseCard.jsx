import { useState } from "react";
import TaskItem from "./TaskItem";


export default function CourseCard({ course, index, onMutateCourse }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");


  // 📘 TASK 4 — PART A (Anchor): Implement toggle using onMutateCourse + .map()
  function toggleTask(id) {
    // TODO: toggle the task with this id
  }


  // 📘 TASK 4 — PART A (Anchor): Implement delete using onMutateCourse + .filter()
  function deleteTask(id) {
    // TODO: delete the task with this id
  }


  // 📘 TASK 4 — PART A (Anchor): Implement add using onMutateCourse
  function addTask(e) {
    e.preventDefault();
    // TODO: create a new task { id, title, dueDate: date, isDone: false }
    // TODO: append it to existing tasks and reset inputs
  }


  return (
    <article className="course card">
      <header className="cardHeader">
      <h2>{course.title}</h2>
        {course.tasks.length > 0 &&
        course.tasks.every(t => t.isDone) && (
        <span className="badge">All caught up</span>
    )}
      </header>


    {course.tasks.length === 0 ? (
        <p>No tasks yet. Add your first one below.</p>
      ) : (
        <ul className="tasks">
          {course.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}


    <section className="tasksSection">
        {course.tasks.length === 0 ? (
        <p>No tasks yet. Add your first one below.</p>
        ) : (
        <ul className="tasks">
        {course.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}

      </section>


      {/* Add Form (provided) */}
      <form onSubmit={addTask} className="newTask">
        <input
          className="titleField"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          aria-label="Task title"
        />
        <div className="dateRow">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-label="Due date"
          />
          <button type="submit" className="primary">Add</button>
        </div>
      </form>
    </article>
  );
}
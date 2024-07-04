import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const { auth } = useContext(AuthContext);
  const [tasks, setTasks] = useState({ 'to-do': [], 'in-progress': [], 'done': [] });

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      const categorizedTasks = { 'to-do': [], 'in-progress': [], 'done': [] };
      res.data.tasks.forEach(task => {
        categorizedTasks[task.status].push(task);
      });
      setTasks(categorizedTasks);
    };
    fetchTasks();
  }, [auth.token]);

  const onDragEnd = async result => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceTasks = Array.from(tasks[source.droppableId]);
      const destTasks = Array.from(tasks[destination.droppableId]);
      const [movedTask] = sourceTasks.splice(source.index, 1);
      movedTask.status = destination.droppableId;
      destTasks.splice(destination.index, 0, movedTask);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destTasks
      });

      await axios.put(`/api/tasks/${movedTask._id}`, movedTask, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {['to-do', 'in-progress', 'done'].map(status => (
        <Droppable key={status} droppableId={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>{status}</h2>
              {tasks[status].map((task, index) => (
                <Draggable key={task._id} draggableId={task._id} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default KanbanBoard;

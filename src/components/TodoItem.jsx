import { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = (props) => {
  const dialog = useRef();
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(props.todo.title); // สำหรับแก้ไขชื่อ

  const openModal = (isEditing) => {
    setEditing(isEditing);
    setEditTitle(props.todo.title); // reset title ทุกครั้งที่เปิด
    dialog.current.showModal();
  };

  const closeModal = () => {
    dialog.current.close();
  };

  const handleSaveEdit = () => {
    const updatedTask = {
      ...props.todo,
      title: editTitle,
      date: new Date().toLocaleString(),
    };
    console.log("Edited Task:", updatedTask);
    closeModal();
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-6 w-6 rounded-full shadow-sm text-white text-sm bg-teal-400 text-center content-center">
            {props.id + 1}
          </div>
          <div>
            <p className="font-semibold">{props.todo.title}</p>
            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <button
            onClick={() => openModal(false)}
            type="button"
            className="todo-btn text-red-500 hover:text-red-600"
          >
            <MdDelete />
          </button>

          <button
            onClick={() => openModal(true)}
            type="button"
            className="todo-btn text-blue-500 hover:text-blue-600"
          >
            <MdEdit />
          </button>
        </div>
      </li>

      {/* Modal */}
      <dialog
        ref={dialog}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[480px] rounded-md bg-white shadow-xl"
      >
        <form className="p-6 space-y-4">
          <h3 className="font-semibold text-xl">
            {editing ? "Edit Task" : "Delete Task"}
          </h3>

          {editing ? (
            <>
              <input
                type="text"
                className="border w-full rounded px-3 py-2 focus:outline-blue-500"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </>
          ) : (
            <p className="text-gray-500">
              Are you sure you want to permanently delete this task?
            </p>
          )}

          <div className="text-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="rounded border border-gray-300 px-3 py-2 hover:bg-gray-50"
            >
              Close
            </button>

            {editing ? (
              <button
                type="button"
                onClick={handleSaveEdit}
                className="rounded bg-blue-500 text-white px-3 py-2 hover:bg-blue-600"
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="rounded bg-red-500 text-white px-3 py-2 hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </dialog>
    </>
  );
};

export default TodoItem;

import React from "react";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
      <i class="fa fa-trash" aria-hidden="true"/>
      </button>
    </div>
  );
}

export default Note;
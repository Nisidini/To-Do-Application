import { RiAddBoxFill, RiDeleteBin2Fill, RiEdit2Fill } from "@remixicon/react";
import { useState } from "react";

function Item({ text, id, onAdd, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = () => {
    onUpdate(id, newText);
    setIsEditing(false);
  };

  return (
    <div className="item">
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <div className="text">{text}</div>
      )}
      <div className="icons">
        {/* <RiAddBoxFill 
          size={36} 
          color="green" 
          className="my-icon" 
          onClick={onAdd} 
        /> */}
        <RiDeleteBin2Fill
          size={25} 
          color="red" 
          className="my-icon" 
          onClick={() => onDelete(id)} 
        />
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <RiEdit2Fill
            size={25} 
            color="green" 
            className="my-icon" 
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Item;

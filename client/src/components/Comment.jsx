import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { AiFillDelete } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import URL from '../URL'

const Comment = ({ c }) => {
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [editedComment, setEditedComment] = useState(c.comment); // State to track edited comment text

  const deleteComment = async (id) => {
    try {
      await axios.delete(URL + `/comments/${id}`, {
        withCredentials: true,
      });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  }

  const updateComment = async (id) => {
    try {
      await axios.put(URL + `/comments/${id}`,{
        comment: editedComment, // Send the edited comment text
      }, { withCredentials: true });
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@{c.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
          <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
          {user?._id === c?.userId ? (
            <div className="flex items-center justify-center space-x-2">
              <p className="cursor-pointer" onClick={() => deleteComment(c._id)}>
                <AiFillDelete />
              </p>
              {isEditing ? (
                <>
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      updateComment(c._id);
                      setIsEditing(false);
                    }}
                  >
                    <AiFillCheckCircle />
                  </p>
                  <p className="cursor-pointer" onClick={() => setIsEditing(false)}>
                    <MdCancel />
                  </p>
                </>
              ) : (
                <p className="cursor-pointer" onClick={() => setIsEditing(true)}>
                  <BiEdit />
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {isEditing ? (
        <textarea
          rows="3"
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
          className="px-4 mt-2"
        />
      ) : (
        <p className="px-4 mt-2">{c.comment}</p>
      )}
    </div>
  );
}

export default Comment;

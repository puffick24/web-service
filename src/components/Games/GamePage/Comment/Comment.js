import React, { useEffect, useState } from 'react';
import style from './Comment.module.css';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../../../hooks/useAuth';
import { getDatabase, ref, get, remove } from 'firebase/database';
import { useParams } from 'react-router-dom';
import ConfirmModal  from '../../../ConfirmModal/ConfirmModal'

const Comment = ({ isCommentAdded, setIsCommentAdded }) => {
  const { id } = useParams();
  const { role } = useAuth();
  const db = getDatabase();
  const [comments, setComments] = useState([]);
  const [confirmModalActive, setConfirmModalActive] = useState(false);

  useEffect(() => {
      const commentsRef = ref(db, `games/${id - 1}/comments`);
      get(commentsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const commentsData = snapshot.val();
            const commentsArray = Object.values(commentsData);
            setComments(commentsArray);
            setIsCommentAdded(false);
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }, [isCommentAdded]);

  const deleteComment = (commentId) => {
    const commentRef = ref(db, `games/${id - 1}/comments/${commentId}`);
    remove(commentRef)
      .then(() => {
        console.log('Comment deleted successfully');
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.id !== commentId)
        );
      })
      .catch((error) => {
        console.error('Error deleting comment:', error);
      });
  };

  const confirmHandle = () => {
    setConfirmModalActive(!confirmModalActive)
  }

  return (
    <ul className={style.comment_wrapper}>
      {Array.isArray(comments) &&
        comments.map((item) => {
          if (item.id !== 999) {
            return (
              <li key={item.id}>
                <React.Fragment>
                  <div className={style.comment_header}>
                    <p>
                      {item.userName} {item.surname}
                    </p>
                    {role === 'admin' ? (
                      <IconButton
                        color="secondary"
                        aria-label="delete"
                        onClick={confirmHandle}
                        >
                        <DeleteIcon
                        />
                      </IconButton>
                    ) : (
                      ''
                    )}
                  </div>
                  <p className={style.recall}>{item.recall}</p>
                </React.Fragment>
                {
                  <ConfirmModal confirmModalActive = {confirmModalActive} setConfirmModalActive = {setConfirmModalActive} item={item} deleteItem= {deleteComment}/>
                }
              </li>
            );
          }
          return null
        })}
    </ul>
  );
};

export default Comment;


import React, { useState } from 'react';
import './CommentsList.css'; // Импортируем стили

const CommentsList = () => {
  // Инициализация состояния с массивом комментариев
  const [comments, setComments] = useState([
    { id: 1, text: 'Это первый комментарий' },
    { id: 2, text: 'Это второй комментарий' },
    { id: 3, text: 'Это третий комментарий' },
  ]);

  // Функция для удаления комментария по id
  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="comments-list">
      <h2>Список комментариев</h2>
      {comments.length === 0 ? (
        <p>Комментариев нет.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.text}
              <button onClick={() => handleDeleteComment(comment.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;
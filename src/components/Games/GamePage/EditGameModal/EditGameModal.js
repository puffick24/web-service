import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, update } from "firebase/database";

import style from './EditGameModal.module.css';

const EditGameModal = ({ isEditing, setIsEditing, id }) => {
  const [title, setTitle] = useState('');
  const [studio, setStudio] = useState('');
  const [review, setReview] = useState('');
  const [poster, setPoster] = useState('');
  const [price, setPrice] = useState([]);
  const [rating, setRating] = useState('');
  const [release_year, setReleaseYear] = useState('');
  const [players, setPlayers] = useState('');
  const [consoles, setConsoles] = useState([]);
  const [completion_time, setCompletionTime] = useState('');

  const games = useSelector(state => state.games.games);

  const setModalStyle = `${style.add_game_modale_wrapper} ${
    isEditing ? style.add_modal_active : ''
  }`;

  useEffect(() => {
    const game = games.find(game => game.id == id);
    const objectValues = Object.values(game.price);
    const valuesString = objectValues.join(', ');
    if (game) {
      setTitle(game.title);
      setStudio(game.studio);
      setReview(game.review);
      setPoster(game.poster);
      setPrice(valuesString);
      setRating(game.rating);
      setReleaseYear(game.release_year);
      setPlayers(game.players);
      setConsoles(game.consoles);
      setCompletionTime(game.completion_time);
    }
  }, [games, id]);

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const prices = value.split(',');
    setPrice(prices);
  };
  
  const handleConsolesChange = (e) => {
    const value = e.target.value;
    const consolesList = value.split(',');
    setConsoles(consolesList);
  };
  

  const editGameHandle = () => {
    const db = getDatabase();

    const editedGame = {
        id,
        title,
        studio,
        review,
        poster,
        price: {
          day:price[0],
          three_day: price[1],
          week: price[2]
        },
        rating,
        release_year,
        players,
        consoles,
        completion_time
    };

    const updates = {};
    updates[`games/${id - 1}/`] = editedGame;
    setIsEditing(false);
    return update(ref(db), updates);
}

  return (
    <div className={setModalStyle} onClick={() => handleCloseModal()}>
      <div onClick={(e) => e.stopPropagation()} className={style.add_modal_active_container}>
        <h3>Редактирование игры</h3>
        <input
          className={style.default_input}
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className={style.default_input}
          placeholder="Студия"
          value={studio}
          onChange={(e) => setStudio(e.target.value)}
        />
        <textarea
          className={style.default_input}
          placeholder="Описание"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <input
          className={style.default_input}
          placeholder="Постер"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <div className={style.small_inputs}>
          <input
            className={style.small_input}
            placeholder="Цена (разделение запятыми)"
            value={price}
            onChange={handlePriceChange}
          />
          <input
            className={style.small_input}
            placeholder="Рейтинг"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            className={style.small_input}
            placeholder="Год выпуска"
            value={release_year}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
          <input
            className={style.small_input}
            placeholder="Игроки"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </div>
        <input
          className={style.default_input}
          placeholder="Консоли (разделение запятыми)"
          value={consoles}
          onChange={handleConsolesChange}
        />
        <input
          className={style.default_input}
          placeholder="Время прохождения"
          value={completion_time}
          onChange={(e) => setCompletionTime(e.target.value)}
        />
        <button onClick={editGameHandle}>Редактировать</button>
      </div>
    </div>
  );
};

export default EditGameModal;
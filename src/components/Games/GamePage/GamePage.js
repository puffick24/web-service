import { useParams } from 'react-router-dom';
import style from './GamePage.module.css'
import { useSelector } from 'react-redux';
import Rating from './Rating'
import { useAuth } from '../../../hooks/useAuth'
import Comment from './Comment/Comment';
import { getDatabase, ref, update } from "firebase/database";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '../../../images/editIcon.svg'
import { useRef } from 'react';
import EditGameModal from './EditGameModal/EditGameModal';

const GamePage = () => {
    const { id } = useParams();

    const [isCommentAdded, setIsCommentAdded] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [commentText, setCommentText] = useState('');
    const games = useSelector(state => state.games.games);
    const game = games.find(game => game.id == id);
    
    const {isAuth, userName, surname, role} = useAuth()

    const commentTextRef = useRef('');

    const commentHandle = () => {
        const db = getDatabase();

        const newComment = {
            id: uuidv4(),
            recall: commentText,
            userName,
            surname,
        };

        const updates = {};
        updates[`games/${id - 1}/comments/` + newComment.id] = newComment;
        setIsCommentAdded(true)
        commentTextRef.current.value = '';
        return update(ref(db), updates);
    }


    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    };

    return ( 
        <div className={style.game_page_wrapper}>
            <div className={style.game_page_container}> 
                <img src = {game.poster}/>
                <div className={style.game_page_container_info}>
                    <h2>{game.title}</h2>
                    <Rating rating = {game.rating}/>
                    <div className={style.info}>
                        <p>{game.release_year}</p>
                        <p>{game.studio}</p>
                        <p>Кол-во игроков: {game.players}</p>
                        <p>Время прохождения: {game.completion_time} часов</p>
                    </div>
                    <p>{game.review}</p>
                    <ul className={style.game_page_container_list}>
                        {game.consoles.map(console => (
                            <li key={console}>{console}</li>
                        ))}
                    </ul>
                    <ul className={style.price_list}>
                        <li>День</li>
                        <li>3 дня</li>
                        <li>Неделя</li>
                        <li>{game.price.day} рублей</li>
                        <li>{game.price.three_day} рублей</li>
                        <li>{game.price.week} рублей</li>
                    </ul>
                    {
                        isAuth ? 
                        <div className={style.auth_comment}>
                            <textarea
                                className={style.auth_comment_textarea}
                                ref={commentTextRef} 
                                placeholder='Добавьте комментарий'
                                onChange={handleCommentChange}
                                />
                            <button
                                onClick={commentHandle}
                                className={style.send_comment}
                                >
                                Отправить
                            </button>
                            <Comment
                                isCommentAdded = {isCommentAdded}
                                setIsCommentAdded = {setIsCommentAdded}
                            />
                        </div> :
                        <div className={style.comment}>
                            <p>Чтобы оставить комментарий вам нужно авторизоваться</p>
                        </div>
                    }

                    {
                        role === 'admin' && 
                        <button className={style.edit_btn} onClick={() => setIsEditing(!isEditing)}>
                            <img 
                                src = {EditIcon}
                            />
                        </button>
                    }
                    <EditGameModal
                        isEditing = {isEditing}
                        setIsEditing = {setIsEditing}
                        id = {id}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default GamePage;
import { Link } from 'react-router-dom';
import style from './Game.module.css'
import {useAuth} from '../../../hooks/useAuth'
import ConfirmModal  from '../../ConfirmModal/ConfirmModal'
import { useState } from 'react';
import { getDatabase, ref, get, remove } from 'firebase/database';

const Game = ({game}) => {
    const { role } = useAuth()
    const db = getDatabase();
    const [confirmModalActive, setConfirmModalActive] = useState(false);

    const confirmHandle = () => {
        setConfirmModalActive(!confirmModalActive)
    }

    const deleteGame = () => {
        const commentRef = ref(db, `games/${game.id - 1}`);
        remove(commentRef)
        .then(() => {
            console.log('Game deleted successfully');
        })
        .catch((error) => {
            console.error('Error deleting comment:', error);
        });
    }
    
    return ( 
        <div className={style.game_wrapper} style={{ backgroundImage: `url(${game.poster})` }}>
            {
                role === 'admin' && 
                <button className={style.button} onClick={confirmHandle}>
                    <span className={style.button_cross}>&#10006;</span>
                </button>
            }
            <div className={style.game_container}>
                <div className={style.info_btn}>
                    <Link to = {`/gamePage/${game.id}`} >Подробнее</Link>
                </div>
            </div>
            <ConfirmModal confirmModalActive = {confirmModalActive} setConfirmModalActive = {setConfirmModalActive} item={game} deleteItem= {deleteGame}/>
        </div>
     );
}
 
export default Game;
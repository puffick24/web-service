import { useEffect, useState } from 'react';
import style from './Games.module.css';

import { getDatabase, ref, child, get, onValue, off} from "firebase/database";
import GamesList from './GamesList/GamesList';
import { useDispatch } from 'react-redux'
import { setGames } from '../../store/slices/gamesSlice'
import { useAuth } from '../../hooks/useAuth'
import AddGameModal from './AddGameModal/AddGameModal';

const Games = () => {
    const [selectedConsole, setSelectedConsole] = useState('Xbox Series X/S');
    const [filteredGames, setFilteredGames] = useState([]);
    const [currentGamesPage, setCurrentGamesPage] = useState(1);
    const [addingActive, setAddingActive] = useState(false)

    const { role } = useAuth()

    const handleConsoleClick = (console) => {
        setSelectedConsole(console);
        setCurrentGamesPage(1)
    };

    const setSelectedConsoleStyle = (console) => {
        return console === selectedConsole ? `${style.selected}` : ``;
    }

    const dbRef = ref(getDatabase());

    const dispatch = useDispatch()

    useEffect(() => {
        get(child(dbRef, `games/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const gamesData = snapshot.val();
                    dispatch(setGames(gamesData));
                    const filteredGamesData = gamesData.filter(game => game.consoles.includes(selectedConsole));
                    setFilteredGames(filteredGamesData)
                }
                else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [selectedConsole]);      

    const addingHandle = () => {
        setAddingActive(true)
    }

    return (
        <div className={style.games_wrapper}>
            <div className={style.games_container}>
                <h2>Игры в прокате</h2>
                <ul className={style.consoles_container_list}>
                    <li
                        onClick={() => handleConsoleClick('Xbox Series X/S')}
                        className={setSelectedConsoleStyle('Xbox Series X/S')}
                    >
                        Xbox Series X
                    </li>
                    <li
                        onClick={() => handleConsoleClick('PlayStation 5')}
                        className={setSelectedConsoleStyle('PlayStation 5')}
                    >
                        PlayStation 5
                    </li>
                    <li
                        onClick={() => handleConsoleClick('PlayStation 4')}
                        className={setSelectedConsoleStyle('PlayStation 4')}
                    >
                        PlayStation 4
                    </li>
                    <li
                        onClick={() => handleConsoleClick('Xbox One X')}
                        className={setSelectedConsoleStyle('Xbox One X')}
                    >
                        Xbox One X
                    </li>
                    <li
                        onClick={() => handleConsoleClick('Nintendo Switch')}
                        className={setSelectedConsoleStyle('Nintendo Switch')}
                    >
                        Nintendo Switch
                    </li>
                </ul>
                <GamesList
                    filteredGames = {filteredGames}
                    currentGamesPage={currentGamesPage}
                    setCurrentGamesPage={setCurrentGamesPage}
                />
                {
                    role === 'admin' && 
                    <button className={style.add_button} onClick = {addingHandle}>
                        +
                    </button>
                }
                <AddGameModal
                    addingActive = {addingActive}
                    setAddingActive = {setAddingActive}
                />
            </div>
        </div>
    );
};

export default Games;
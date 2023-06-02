import { Pagination } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

import style from './GamesList.module.css'

import Game from '../Game/Game';

const GamesList = ({filteredGames,currentGamesPage, setCurrentGamesPage}) => {
    const gamesPerPage = 8
    const pageNum = Math.ceil(filteredGames.length / gamesPerPage);

    const paginate = pageNum => setCurrentGamesPage(pageNum);
    const indexOfLastGame = currentGamesPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

    const handlePageChange = (event, page) => {
        paginate(page);
    }

    return (
        <div className={style.game_list_wrapper}>
            <ul className={style.game_list_container}>
                {
                    currentGames.map((game) => (
                        <Game 
                            key={uuidv4()}
                            game={game}
                        />
                    ))
                }
            </ul>
            <Pagination 
                onChange={handlePageChange} 
                className={style.pagination} 
                count={pageNum} 
                size='large' 
                page={currentGamesPage} 
                color="primary"
            />
        </div>
    );
}
 
export default GamesList;

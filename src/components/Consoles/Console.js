import style from './Consoles.module.css'
import ConsolePoster from './ConsolePoster/ConsolePoster'

import XboxSeriesX from '../../images/xboxX.png'
import SteamDeck from '../../images/steamdeck.png'
import PlayStation5 from '../../images/ps5.png'
import PlayStation4 from '../../images/ps4.png'
import Nintendo from '../../images/nintendo.png'
import XboxOneX from '../../images/xboxOneX.png'


const Consoles = () => {
    return ( 
        <div className={style.consoles_wrapper}>
            <div className={style.console_container}>
                <h2>Игровые приставки в прокате</h2>
                <ul className={style.console_container_list}>
                    <ConsolePoster img = {XboxSeriesX} title = {'Xbox Series X'} price = {'40'}/>
                    <ConsolePoster img = {PlayStation5} title = {'PlayStation 5'} price = {'40'}/>
                    <ConsolePoster img = {PlayStation4} title = {'PlayStation 4'} price = {'30'}/>
                    <ConsolePoster img = {XboxOneX} title = {'Xbox One X'} price = {'25'}/>
                    <ConsolePoster img = {Nintendo} title = {'Nintendo Switch'} price = {'20'}/>
                    <ConsolePoster img = {SteamDeck} title = {'SteamDeck'} price = {'20'}/>
                </ul>
            </div>
        </div>
     );
}
 
export default Consoles;
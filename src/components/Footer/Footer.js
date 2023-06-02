import style from './Footer.module.css'
import VK from '../../images/VK.svg'
import Instagram from '../../images/instagram.svg'
import TelegramGroup from '../../images/telegramGroup.svg'

import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div className={style.footer}>
            <div className={style.footer_container}>
                <div className={style.footer_menu}>
                    <div>
                        <h3>Ресурсы</h3>
                        <ul>
                            <li><Link to = "/consoles">Игровые приставки</Link></li>
                            <li><Link to = "/games">Игры</Link></li>
                            <li><Link to = "/about">Условия и доставка</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Контакты</h3>
                        <ul className={style.contacts}>
                            <p>Номера телефонов для заказа:</p>
                            <li><a href = "tel:+375333290096">+375-33-329-00-96</a></li>
                            <p>Telegram</p>
                            <li><a href = "https://t.me/puffick24">Написать в Телеграмм</a></li>
                            <p>Электронная почта:</p>
                            <li><a href="mailto:kowaleff.evgeniy@gmail.com">kowaleff.evgeniy@gmail.com</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>О нас</h3>
                        <ul>
                        <li><img src = {VK}></img><a href = "#">VK</a></li>
                            <li><img src = {TelegramGroup}></img><a href = "#">Telegram</a></li>
                            <li><img src = {Instagram}></img><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className={style.сopyright}>
                    <p>Все права на контент, размещенный на данном сайте, охраняются авторским законодательством. <br/>Копирование, распространение и любое иное использование материалов сайта без письменного разрешения правообладателя запрещено.<br/> Исключение составляет использование материалов сайта в некоммерческих целях при условии сохранения всех авторских указаний и ссылок на источник. <br/>Любое нарушение авторских прав будет преследоваться в соответствии с действующим законодательством.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
import style from './About.module.css'

import Point from '../../images/point.png'
import PointIcon from '../../images/point_icon.png'
import Phone from '../../images/phone_icon.png'
import Email from '../../images/email.png'
import Telegram from '../../images/telegram_icon.png'
import Clocks from '../../images/clocks.png'
import Controller from '../../images/controller.png'
import OrderIcon from '../../images/order_icon.png'
import Smile from '../../images/smile.png'

const About = () => {
    return ( 
        <div className={style.about_wrapper}>
            <div className={style.square}></div>
            <div className={style.about_container}>
                <div className={style.about_general_info}>
                    <div>
                        <p>Мы предоставляем услуги аренды консолей и игр для домашних вечеринок, корпоративных мероприятий и других мероприятий. Мы работаем с самыми популярными консолями, такими как PlayStation, Xbox и Nintendo Switch, и предлагаем огромный выбор игр на все вкусы.</p><br/>
                        <p>Наша цель - предоставить нашим клиентам незабываемые впечатления от игры, не выходя из дома. Мы гарантируем высокое качество оборудования и максимальную безопасность во время использования. Сделайте свой заказ прямо сейчас и наслаждайтесь игрой уже завтра!</p>
                    </div>
                    <img src = {Point}/>
                </div>
                <div className={style.about_info}>
                    <h2>Контакты для оформления заказа</h2>
                    <p style={{textAlign: 'justify'}}>
                        Чтобы взять приставку в прокат, позвоните нам или оставьте сообщение в Telegram. Можем доставить приставку в течение 1 - 2 часов после оформления заказа. Будет приятно иметь с вами дело!
                    </p>
                    <ul className={style.about_info_list}>
                        <li className={style.about_info_list_item}>
                            <h4><img src = {Phone}/>ТЕЛЕФОН:</h4>
                            <p>
                                <a href = "tel:+375333290096">+375-33-329-00-96</a>
                            </p>
                        </li>
                        <li className={style.about_info_list_item}>
                            <h4><img src = {Telegram}/>TELEGRAM:</h4>
                            <p>
                                <a href = "https://t.me/puffick24">Написать в Телеграмм</a>
                            </p>
                        </li>
                        <li className={style.about_info_list_item}>
                            <h4><img src = {Email}/>EMAIL:</h4>
                            <p>
                                <a href="mailto:kowaleff.evgeniy@gmail.com">kowaleff.evgeniy@gmail.com</a>
                            </p>
                        </li>
                        <li className={style.about_info_list_item}>
                            <h4><img src = {PointIcon}/>АДРЕС:</h4>
                            <p>
                                г. Минск, 2-й Силикатный переулок, 17
                            </p>
                        </li>
                        <li className={style.about_info_list_item}>
                            <h4><img src = {Clocks}/>ВРЕМЯ РАБОТЫ:</h4>
                            <p>
                                ПН-СР: 10:00 — 20:00<br/>
                                ЧТ-ВС:  12:00 — 20:00<br/>
                                <span>БЕЗ ВЫХОДНЫХ И ОБЕДА</span>
                            </p>
                        </li>
                        <li className={style.about_info_list_item}>
                            <p style={{paddingBottom: '20px'}}>
                            И.П. Ковалёв Евгений Дмитриевич<br/>
                            </p>
                            <p>
                            Действующий на основании Свидетельства о государственной регистрации №193325176 от 28 Октября 2019г,  выданного Минским горисполкомом.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={style.about_review}>
                    <ul className={style.about_review_list}>
                        <li className={style.about_review_list_item}>
                            <img src = {Smile}/>
                            <p>320+</p>
                            <p>Счастливых клиентов</p>
                        </li>
                        <li className={style.about_review_list_item}>
                            <img src = {OrderIcon}/>
                            <p>450+</p>
                            <p>Заказов в год</p>
                        </li>
                        <li className={style.about_review_list_item}>
                            <img src = {Controller}/>
                            <p>80+</p>
                            <p>Различных игр</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default About;
import style from './Delivery.module.css'
import Map from './Map/Map'

import Conditions from '../../images/conditions.png'
import DeliveryPage from '../../images/deliveryPage.png'

const Delivery = () => {
    return ( 
        <div className={style.delivery_wrapper}>
            <div className={style.circle}></div>
            <div className={style.delivery_container}>
                <div className={style.conditions}>
                    <div className={style.conditions_header}> 
                        <img className={style.conditions_image} src = {Conditions}></img>
                        <h2>Условия</h2>
                    </div>
                    <h3>Чтобы воспользоваться услугами нашего проката, достаточно соблюсти несколько простых условий:</h3>
                    <ul className={style.conditions_list}>
                        <li>Прокат оформляется только на лиц старше 18 лет.</li>
                        <li>Для подтверждения личности требуется предъявить действующий паспорт гражданина РБ. Принимаются только оригинальные документы.</li>
                        <li>Для получения игровой консоли обязательно иметь предоплату за весь срок проката. Она производится в момент оформления договора в полном объеме.</li>
                        <li>Услуга предоставляется лицам, не состоящим в черном списке прокатов РБ. </li>
                    </ul>
                    <p>Перед выдачей оборудования сотрудник компании сверяет данные вашего паспорта с данными, находящимися в государственном реестре на сайте ведомства.</p>
                </div>
                <div className={style.delivery}>
                    <div className={style.delivery_block}>
                        <div>
                            <h2>Доставка</h2>
                            <ul className={style.delivery_list}>
                                <li>Доставка и вывоз осуществляются только в пределах МКАД.</li>
                                <li>Стоимость доставки: 10 руб.</li>
                                <li>Доставка включается в себя установку и настройку взятого в прокат оборудования на дому у клиента.</li>
                            </ul>
                        </div>
                        <div>
                            <img src = {DeliveryPage}></img>
                        </div>
                    </div>
                    <p> * При заказе от 100 рублей доставка и вывоз осуществляются бесплатно </p>
                </div>
                <div className={style.payment}>
                    <h2>Оплата</h2>
                    <p>Оплата производится наличными и безналичными денежными средствами исключительно в белорусских рублях.</p>
                    <ul className={style.payment_list}>
                        <li>Вывоз оборудования входит в стоимость доставки</li>
                        <li>Установка оборудования включена в стоимость доставки</li>
                        <li>При заказе от 100 BYN, доставка и вывоз бесплатные</li>
                        <li>Минимальная сумма заказа для доставки - 60 BYN</li>
                    </ul>
                </div>
                <div className={style.extradition}>
                    <h2>Пункт выдачи</h2>
                    <p>г. Минск, 2-й Силикатный переулок, 17. Только по предварительной договоренности</p>
                </div>
            </div>
            <Map/>
        </div>
    );
}
 
export default Delivery;
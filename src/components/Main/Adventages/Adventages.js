import style from './Adventages.module.css'

import Console from '../../../images/console.png'
import Procent from '../../../images/procent.png'
import Delivery from '../../../images/delivery.png'
import Response from '../../../images/response.png'

const Adventages = () => {
    return (
        <div className={style.adventages_wrapper}>
            <div className={style.adventages_container}>
                <h2>Почему стоит выбрать <br/> именно C<span>&</span>G?</h2>
                <ul className={style.adventages_container_list}>
                    <li className={style.adventages_container_item}>
                        <div className={style.image_border}>
                            <img src = {Console}></img>
                        </div>
                        <p>
                            Мы регулярно обновляем ассортимент, чтобы обеспечить наших клиентов самой свежей и актуальной продукцией, которая только появились на рынке. <br/>
                        </p>
                        <p>
                            Кроме того, мы предоставляем детальные обзоры и рекомендации по каждой игре, чтобы вы могли лучше понять, чего ожидать от продукта.
                        </p>
                    </li>
                    <li className={style.adventages_container_item}>
                        <div className={style.image_border}>
                            <img src = {Procent}></img>
                        </div>
                        <p>
                        Мы предоставляем высококачественную и доступную продукцию. Мы сделали все возможное, чтобы наши цены были наиболее конкурентоспособными на рынке. Вы можете быть уверены, что получите отличное качество по самой выгодной цене.
                        </p>
                    </li>
                    <li className={style.adventages_container_item}>
                        <div className={style.image_border}>
                            <img src = {Delivery}></img>
                        </div>
                        <p>
                            Одним из явных преимуществ нашей продукции является возможность доставки прямо к двери клиента.
                            Это очень удобно и быстро, что экономит ваше время и усилия.<br/>
                        </p>
                        <p>
                            Это особенно важно для тех, кто живет в удаленных районах или не имеет возможности самостоятельно посетить наш офис.
                        </p>
                    </li>
                    <li className={style.adventages_container_item}>
                        <div className={style.image_border}>
                            <img src = {Response}></img>
                        </div>
                        <p>
                            Огромный плюс нашей продукции - это простота и скорость заказа. Мы уделяем большое внимание удобству пользователей и постоянно работаем над упрощением процесса заказа. 
                        </p>
                        <p>
                            Пользователи могут быстро и легко выбрать необходимые товары и оформить заказ всего за несколько кликов.
                        </p>
                    </li>
                </ul>
            </div>
        </div>      
     );
}
 
export default Adventages;
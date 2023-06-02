import style from './Order.module.css'

import { Link, Navigate } from 'react-router-dom'

const Order = () => {
    return ( 
        <div className={style.order_wrapper}>
            <div className={style.order_container}>
                <h3>Как происходит процесс аренды</h3>
                <ul className={style.order_list}>
                    <li>
                        <div className={style.order_border}>
                            <p>1</p>
                        </div>
                        <h4>Выбор консоли</h4>
                        <p>Перед тем, как начать процесс аренды, определитесь, какую консоль вы хотите арендовать. Разные консоли могут иметь разные доступные игры, особенности и стоимость аренды.</p>
                    </li>
                    <li>
                        <div className={style.order_border}>
                            <p>2</p>
                        </div>
                        <h4>Выбор игры</h4>
                        <p>После того, как вы определились с консолью, выберите игру, в которую вы хотите играть. Для этого вам следует изучить наш ассортимент игр, доступных для аренды.</p>
                    </li>
                    <li>
                        <div className={style.order_border}>
                            <p>3</p>
                        </div>
                        <h4>Оформление договора</h4>
                        <p>Свяжитесь с нами и оформите договор на аренду консоли и игры. Вам нужно предоставить свои данные для заполнения формы аренды, а также информацию о дате и времени, когда вы хотите забрать консоль или сможете принять доставку.</p>
                    </li>
                    <li>
                        <div className={style.order_border}>
                            <p>4</p>
                        </div>
                        <h4>Заберите консоль</h4>
                        <p>Приходите в указанный день в офис, чтобы забрать заказ, или дождитесь доставки по условленному адресу и времени. Мы предоставим инструкции по использованию консоли, а также о ее возвращении после окончания периода аренды.</p>
                    </li>
                    <li>
                        <div className={style.order_border}>
                            <p>5</p>
                        </div>
                        <h4>Получение консоли</h4>
                        <p>Когда вы заберете консоль или получите ее доставкой, проверьте исправность всех компонентов. Если вы заметили какие-либо дефекты, сообщите нам, чтобы решить возникшие проблемы.</p>
                    </li>
                    <li>
                        <div className={style.order_border}>
                            <p>6</p>
                        </div>
                        <h4>Возврат консоли</h4>
                        <p>После окончания периода аренды верните консоль и игру в офис или посредством доставки. Убедитесь, что вы вернули все компоненты и в отличном состоянии, чтобы избежать дополнительных затрат.</p>
                    </li>
                </ul>
                <div className={style.btn}><Link to = "/consoles">Перейти в каталог</Link></div>
            </div>
        </div>
     );
}
 
export default Order;
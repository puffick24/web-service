import NotFoundImg from '../../images/NotFoundImage.svg'


import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return ( 
        <div className={style.not_found_wrapper}>
            <div className={style.container}>
                <img src = {NotFoundImg}></img>
                <h1>Страница не найдена</h1>
                <p>Кажется что-то пошло не так! Страница, которую вы искали, не существует. Возможно она устарела, была удалена или адрес был введён неверно.</p>
            </div>
        </div>
     );
}

export default NotFoundPage
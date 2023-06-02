import style from './ConsolePoster.module.css'

const ConsolePoster = ({img, title, price}) => {
    return ( 
        <div className={style.console_poster_wrapper}>
            <div className={style.console_poster_container}>
                <img onClick = {() => {console.log('123')}} src = {img}/>
                <p>{title}</p>
                <p>От {price} руб</p>
            </div>
        </div>
     );
}
 
export default ConsolePoster;
import { Link, useLocation} from 'react-router-dom';

import style from './Header.module.css'
import logoWhite from '../../images/logoW.svg'
import logoBlack from '../../images/logoB.svg'

import Authorization from '../Authorization/Authorization';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux';
import {removeUser} from '../../store/slices/userSlice'

const Header = () => {
    const location = useLocation()
    let setHeaderClassName = ''

    const getLogoStyle = () => {
        // return location.pathname === '/' || location.pathname === '/games' || location.pathname === '/consoles' || location.pathname === '/delivery' || location.pathname === '/about' ? logoWhite : logoBlack;
        return  location.pathname === '/*' ? logoBlack : logoWhite;
    }

    const getAuthStyle = () => {
        // return location.pathname === '/' || location.pathname === '/games' || location.pathname === '/consoles' || location.pathname === '/delivery' || location.pathname === '/about' ? `${style.auth_white}` : `${style.auth_black}`;
        return location.pathname === '/*' ? `${style.auth_black}` : `${style.auth_white}`;
    }

    // if (location.pathname !== '/' && location.pathname !== '/games' && location.pathname !== '/consoles' && location.pathname !== '/delivery' && location.pathname !== '/about') {
    //     setHeaderClassName = `${style.other}`;
    // }
    if (location.pathname === '/*') {
        setHeaderClassName = `${style.other}`;
    }
    // else if(location.pathname === '/*'){
    //     setHeaderClassName = `${style.other}`;
    // }

    const {isAuth, userName, surname} = useAuth()

    const [authActive, SetAuthActiveState] = useState(false)

    const SetAuthActive = () => {
        SetAuthActiveState(!authActive)
    }

    const dispatch = useDispatch()

    return ( 
        <div className={style.container}>
            <Link to =  "/"><img className={style.logo} src = {getLogoStyle()} /></Link>
            <nav className={style.menu}>
                <li><Link to = "/consoles" className={`${setHeaderClassName} ${location.pathname === '/consoles' ? style.active : ''}`}>Игровые приставки</Link></li>
                <li><Link to = "/games" className={`${setHeaderClassName} ${location.pathname === '/games' ? style.active : ''}`}>Игры</Link></li>
                <li><Link to = "/delivery" className={`${setHeaderClassName} ${location.pathname === '/delivery' ? style.active : ''}`}>Условия и доставка</Link></li>
                <li><Link to = "/about" className={`${setHeaderClassName} ${location.pathname === '/about' ? style.active : ''}`}>О нас</Link></li>
                {
                isAuth ? 
                <button onClick={() => dispatch(removeUser())} className={getAuthStyle()}>Выйти с {`${surname} ${userName}`}</button> 
                :
                <button onClick={SetAuthActive} className={getAuthStyle()}>Войти в аккаунт</button>
                }
            </nav>
            <Authorization authActive = {authActive} SetAuthActiveState = {SetAuthActiveState}/>
        </div>
     );
}
 
export default Header;
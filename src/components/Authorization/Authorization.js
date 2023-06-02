import style from './Authorization.module.css'
import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Authorization = ({ authActive, SetAuthActiveState }) => {
  const [isActive, setIsActive] = useState(false);

  const [wrongPassword, setWrongPassword] = useState(false)
  const [emailInUse, setEmailInUse] = useState(false)

  const dispatch = useDispatch()

  function writeUserData(userId, userName, surname, email) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      userName,
      surname,
      email,
      role: 'user'
    });
  }

  const getUserData = (userId) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const { email, surname, role, userName } = snapshot.val();
          dispatch(setUser({ email, surname, role, userName }));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
    });
}

const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
        dispatch(setUser({
            email,
        }))
        getUserData(user.uid)
        SetAuthActiveState(false)
        setWrongPassword(false)
    })
    .catch(error => {
        console.error(error);
        setWrongPassword(true)
    })
  }

  const handleSignUp = (userName, surname, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email,
          userName,
          surname
        }))
        writeUserData(user.uid, userName, surname, email)
        SetAuthActiveState(false)
        setEmailInUse(false)
      })
      .catch(error => {
        setEmailInUse(true)
        console.error(error);
      })
  }


  const LoginSwitch = () => {
    setIsActive(!isActive);
  }

  const setModalStyle = `${style.authorization_wrapper} ${authActive ? style.auth_active : ''}`

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('*Это поле обязательное'),
    password: Yup.string().required('*Это поле обязательное'),
  });

  const validationSchemaSignUp = Yup.object().shape({
    email: Yup.string().email('Неверный email').required('*Это поле обязательное'),
    password: Yup.string().required('*Это поле обязательное'),
    userName: Yup.string().required('*Это поле обязательное'),
    surname: Yup.string().required('*Это поле обязательное'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const initialValuesSignUp = {
    email: '',
    password: '',
    userName: '',
    surname: '',
  };
  
  const onLoginSubmit = (values) => {
    handleLogin(values.email, values.password);
  }

  const onSignUpSubmit = (values) => {
    handleSignUp(values.userName, values.surname,values.email, values.password);
  }

  return (
    <div className={setModalStyle} onClick={() => { SetAuthActiveState(false) }}>
      <div onClick={e => e.stopPropagation()} className={isActive ? `${style.authorization_container} ${style.active}` : `${style.authorization_container}`}>
        <div className={style.authorization_content}>
          <h2>Авторизация</h2>
          {
            wrongPassword && <p className={style.error_message}>Неправильный логин или пароль!</p>
          }
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onLoginSubmit}
          >
            <Form>
              <div className={style.authorization_inputs}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style.error_message}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={style.error_message}
                />
              </div>
              <div className={style.checkbox}>
                <div className={style.checkbox_button}>
                  <input type='checkbox' />
                  <p>Запомнить меня</p>
                </div>
                <div className={style.link}>
                  <a href='#'>Забыли пароль?</a>
                </div>
              </div>
              <button type = 'submit'>Войти</button>
            </Form>
          </Formik>
        </div>
        <div className={style.authorization_overlay}>
          <h2>Выбирай консоли с нами!</h2>
          <p>Если у вас еще нет учетной записи, присоединяйтесь к нам.</p>
          <button onClick={LoginSwitch}>Зарегистрироваться</button>
        </div>
        <div className={style.signUp_overlay}>
          <h2>Уже есть учётная запись?</h2>
          <p>Вы можете перейти к авторизации и ввести свои данные. Оставайтесь с нами!</p>
          <button onClick={LoginSwitch}>Перейти к авторизации</button>
        </div>
        <div className={style.signUp_content}>
          <h2>Регистрация</h2>
          {
            emailInUse && <p className={style.error_message}>Эта почта уже используется!</p>
          }
          <Formik
            initialValues={initialValuesSignUp}
            validationSchema={validationSchemaSignUp}
            onSubmit={onSignUpSubmit}
          >
            <Form>
              <div className={style.signUp_inputs}>
                <Field
                  type="text"
                  name="surname"
                  placeholder="Фамилия"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className={style.error_message}
                />
                <Field
                  type="text"
                  name="userName"
                  placeholder="Имя"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className={style.error_message}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={style.error_message}
                />
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={style.error_message}
                />
              </div>
              <button type = 'submit'>Регистрация</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
import Header from "../Header/Header"
import Main from "../Main/Main";
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Footer from "../Footer/Footer";
import Delivery from "../Delivery/Delivery";
import About from "../About/About";

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import style from './App.module.css'
import { persistor,store } from "../../store";
import '../../FireBase'
import Consoles from "../Consoles/Console";
import Games from "../Games/Games";
import GamePage from "../Games/GamePage/GamePage";
import { PersistGate} from 'redux-persist/integration/react';

function App() {

  return (
    <BrowserRouter>
      <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <div className={style.container}>
              <Header/>
              <Routes>
                <Route path = '/' element = { <Main/> }></Route>
                <Route path = '/*' element = { <NotFoundPage/> }></Route>
                <Route path = '/delivery' element = { <Delivery/> }></Route>
                <Route path = '/about' element = { <About/> }></Route>
                <Route path = '/consoles' element = { <Consoles/> }></Route>
                <Route path = '/games' element = { <Games/> }></Route>
                <Route path = '/gamePage/:id' element = { <GamePage/> }></Route>
              </Routes>
              <Footer/>
            </div>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
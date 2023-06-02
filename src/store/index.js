import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from '../store/slices/userSlice'
import GamesReducer from '../store/slices/gamesSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key:  'root',
    storage,
  }

const rootReducer = combineReducers({
    user: UserReducer,
    games: GamesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
import { createSlice } from '@reduxjs/toolkit'

const gamesSlice = createSlice({
    name: 'games',
    initialState: {

    },
    reducers:{
        setGames(state, action) {
            const games = action.payload;
            state.games = games;
        },
        addGame(state, action) {
            const game = action.payload;
            state.games.push(game);
        },
        removeGames(state) {
            state.games = [];
        },
        addComments(state, action){
            const game = action.payload;
            state.games = [...state.games, game]
        }
    },
})

export const {setGames, addGame, removeGames, addComments} = gamesSlice.actions;
export default gamesSlice.reducer;
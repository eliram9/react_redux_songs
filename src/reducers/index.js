import { combineReducers } from 'redux';

// The first resucer is a static list of songs 
const songListReducer = () => {
    return [
        { title: 'D.O.A',artist: 'Jay-Z', duration: '4:16' },
        { title: 'Paradise',artist: 'Coldplay', duration: '4:20' },
        { title: 'Get Lucky',artist: 'Pharrell Williams', duration: '6:06' },
        { title: 'Alien',artist: 'Dennis Lloyd', duration: '2:44' }
    ];
};

// Selected song by the user as a second reducer
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
   songs: songListReducer,
   selectedSong: selectedSongReducer 
});
 

import { combineReducers } from 'redux';

// The first resucer is a static list of songs 
const songsListReducer = () => {
    return [
        { title: 'D.O.A', duration: '4:16' },
        { title: 'Paradise', duration: '4:20' },
        { title: 'Get Lucky', duration: '6:06' },
        { title: 'Alien', duration: '2:44' }
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
   songs: songsListReducer,
   selectedSong: selectedSongReducer 
});
 

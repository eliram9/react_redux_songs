import React from 'react';

import { connect } from 'react-redux';

const SongDetails = ({ mySelectedSong }) => {
    if (!mySelectedSong) {
        return <div>Select a song</div>
    }
    return ( 
        <div>
            <strong>Song: </strong>{ mySelectedSong.title }
            <br />
            <strong>Artist:</strong> { mySelectedSong.artist }
            <br />
            <strong>Duration:</strong> { `${mySelectedSong.duration} Minutes` }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong }
}
 
export default connect(mapStateToProps)(SongDetails);
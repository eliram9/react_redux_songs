import React, { Component } from 'react';

import { connect } from 'react-redux';
import './SongList.css';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="list-group-item" key={song.title}>
                    <div className="song">
                        <p>{song.title}</p>
                    </div>

                    <div className="select_btn">
                        <button type="button" className="btn btn-outline-primary">Select</button>
                    </div>
                </div>
            );
        })
    }

    render() { 
        return(
            <div className="container">
                <div className="row">
                    <div className="col song_list">
                        {this.renderList()}             
                    </div>
                    <div className="col song_list">
                        hello there            
                    </div>
                </div>
            </div>
            
        )
    }
}

// "Converting" all data we have in redux store into a props
const mapStateToProps = (state) => {
    return { songs: state.songs };
}
 
export default connect(mapStateToProps)(SongList);
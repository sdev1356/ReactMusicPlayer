import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerDetails(props){
    return(
        <div className="music-player--details">
            <div className="details-img">
                <img src={props.song.img_src}alt={props.song.title}/>
            </div>
            <div class="range"></div>
            <div className="artist-info">
                <h3 className="details-title">{props.song.title}</h3>
                <h4 className="details-artist">{props.song.artist}</h4>
                <div class="line"></div>
            </div>
        </div>
    );
}
export default PlayerDetails;
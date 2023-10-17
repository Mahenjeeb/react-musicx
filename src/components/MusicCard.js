import React from 'react';
import '../components/MusicCard.css';

export default function MusicCard(props) {
    return (
        <div>
          <div className='container mx-4 my-4'>
            <div className='card--container'>
                <p><b>{props.title}</b></p>
                <p>{props.name}</p>
              {/* <p className='play--text'>Play</p> */}
            </div>
          </div>
          
        </div>
    )
}
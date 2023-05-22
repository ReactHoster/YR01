import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube-nocookie.com/embed/';

export function Video(props) {
  if(!props.id) {
    return null;
  }
  //const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;
  const embedUrl = `${BASE_EMBED_URL}${props.id}`;
  return (
    <div className='video-container'>
      <div className="video">
        <iframe width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  );
}

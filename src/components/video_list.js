import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    const key = video.etag;
    return (
      <VideoListItem
        video={video}
        key={key}
        onVideoSelect={props.onVideoSelect}/>
    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;

import React from 'react';
import PhotoThumbnail from './PhotoThumbnail';

export default class PhotoBrowser extends React.Component {

  //Create 50 thumbnails for photo gallery
  createPhotoThumbnails() {
    let thumbnails = [];
    for (let i = 1; i < 51; i++) {
      thumbnails.push(<PhotoThumbnail key={i} id={i}></PhotoThumbnail>);
    }
    return thumbnails;
  }

  render() {
    return (
      <div className="PhotoBrowser">
        <h1>Tom's Photo Browser</h1>
        {this.createPhotoThumbnails()}
      </div>
    );
  }
}
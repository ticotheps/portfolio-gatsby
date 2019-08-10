import React from 'react';

class Card extends React.Component {
  playVideo() {
    this.refs.vidRef.play();
  }

  pauseVideo() {
    this.refs.vidRef.pause();
  }

  render(props) {
    return (
      <div className="about-card">
        <h2>{this.props.name}</h2>
        <video
          muted
          loop
          ref="vidRef"
          src={this.props.video}
          type="video/mp4"
          onMouseOver={this.playVideo.bind(this)}
          onMouseOut={this.pauseVideo.bind(this)}
        />
        <div className="circle" />

        <p>{this.props.about}</p>

        <br />
      </div>
    );
  }
}

export default Card;

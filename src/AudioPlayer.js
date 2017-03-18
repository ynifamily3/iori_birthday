import React, { Component } from 'react'

class AudioPlayer extends Component {
  componentDidMount() {
    document.querySelector('audio').play()
  }
  render() {
    return (
      <div>
        <audio controls loop preload="auto">
          <source src="./assets/mp3/bgm.mp3" type="audio/mpeg" />
        </audio>
        <style jsx>{`
          audio {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 3;
          }
        `}</style>
      </div>
    )
  } 
}

export default AudioPlayer

import React, { createRef } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faStop,
  faVolumeDown,
  faVolumeUp,
  faVolumeMute,
  faExpand,
} from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.figure`
  margin: 1rem 10%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1px;
  display: inline-block;

  video {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin-bottom: 1px;
  }

  #video-controls {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    height: 40px;

    li,
    button {
      width: 40px;
      height: 40px;
      margin-right: 1px;
      overflow: hidden;
      display: block;

      &:last-of-type {
        margin-right: 0;
      }
    }

    button {
      color: white;
      font-size: 0.8rem;
      border: 0 none;
    }

    li.progress {
      width: calc(100% - (6 * 40px) - 5px);

      progress {
        width: calc(100% - 2rem);
        margin: 0 1rem;
      }
    }
  }
`
const player = createRef<HTMLVideoElement>()
const progress = createRef<HTMLProgressElement>()
const progressBar = createRef<HTMLSpanElement>()

const playPause: Function = async (): Promise<void> => {
  let promise
  if (player.current) {
    if (player.current.paused || player.current.ended) {
      promise = player.current.play()
    } else {
      promise = player.current.pause()
    }
  } else {
    promise = Promise.resolve()
  }
  return promise
}

const stop: Function = async (): Promise<void> => {
  let promise
  if (player.current && progress.current) {
    promise = player.current.pause()
    player.current.currentTime = 0
    progress.current.value = 0
  } else {
    promise = Promise.resolve()
  }
  return promise
}

const renderControls = () => {
  if (!document.createElement('video').canPlayType) {
    return <></>
  } else {
    if (player.current) player.current.removeAttribute('controls')
    return (
      <ul id="video-controls" className="controls">
        <li>
          <button id="playpause" type="button" onClick={e => playPause(e)}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </li>
        <li>
          <button id="stop" type="button" onClick={e => stop(e)}>
            <FontAwesomeIcon icon={faStop} />
          </button>
        </li>
        <li className="progress">
          <progress id="progress" value="0" ref={progress}>
            <span id="progress-bar" ref={progressBar}></span>
          </progress>
        </li>
        <li>
          <button id="mute" type="button">
            <FontAwesomeIcon icon={faVolumeMute} />
          </button>
        </li>
        <li>
          <button id="volinc" type="button">
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        </li>
        <li>
          <button id="voldec" type="button">
            <FontAwesomeIcon icon={faVolumeDown} />
          </button>
        </li>
        <li>
          <button id="fs" type="button">
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </li>
      </ul>
    )
  }
}

const VideoPlayer: React.FC = () => {
  if (player.current) {
    player.current.addEventListener('timeupdate', e => {
      if (player.current && progress.current) {
        progress.current.setAttribute('max', player.current.duration.toString())
      }
    })

    player.current.addEventListener('timeupdate', e => {
      if (player.current && progress.current && progressBar.current) {
        progress.current.value = player.current.currentTime
        progressBar.current.style.width =
          Math.floor(
            (player.current.currentTime / player.current.duration) * 100
          ) + '%'
      }
    })
  }
  return (
    <Wrapper>
      <video
        ref={player}
        id="video"
        controls
        preload="metadata"
        poster="/images/fra/background.jpg"
      >
        <source
          src="https://kellytowle-vidyas.s3-us-west-2.amazonaws.com/sadie-manda.mp4"
          type="video/mp4"
        />
      </video>
      {renderControls()}
    </Wrapper>
  )
}

export default VideoPlayer

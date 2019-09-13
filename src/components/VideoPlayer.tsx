import React, { createRef, useState, ReactElement } from 'react'
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
  faCompress,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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

interface ButtonProps {
  icon: IconProp
  handler: Function
}

const PlayerButton: React.FC<ButtonProps> = ({ icon, handler }) => (
  <button type="button" onClick={e => handler(e)}>
    <FontAwesomeIcon icon={icon} />
  </button>
)

interface VideoControlsProps {
  player: HTMLVideoElement | null
  status: string | null
  duration: number | null
  position: number | null
  handlers: {
    playPause: Function
    stop: Function
  }
}

const VideoControls: React.FC<VideoControlsProps> = ({
  player,
  status,
  duration,
  position,
  handlers,
}) => {
  if (!document.createElement('video').canPlayType) {
    return <></>
  } else {
    if (player) player.removeAttribute('controls')
    if (progress.current && duration) {
      progress.current.setAttribute('max', duration.toString())
    }
    return (
      <ul id="video-controls" className="controls">
        <li>
          <PlayerButton
            icon={status === 'playing' ? faPause : faPlay}
            handler={() => {
              handlers.playPause()
              console.log('Player status: ', status)
            }}
          />
        </li>
        <li>
          <PlayerButton
            icon={faStop}
            handler={() => {
              handlers.stop()
              console.log('Player status: ', status)
            }}
          />
        </li>
        <li className="progress">
          <progress id="progress" value="0" ref={progress}>
            <span id="progress-bar" ref={progressBar} />
          </progress>
        </li>
        <li>
          <PlayerButton icon={faVolumeMute} handler={() => {}} />
        </li>
        <li>
          <PlayerButton icon={faVolumeUp} handler={() => {}} />
        </li>
        <li>
          <PlayerButton icon={faVolumeDown} handler={() => {}} />
        </li>
        <li>
          <PlayerButton icon={faExpand} handler={() => {}} />
        </li>
      </ul>
    )
  }
}

const VideoPlayer: React.FC = () => {
  const [playerStatus, setStatus] = useState('stopped')
  const [playerDuration, setDuration] = useState(0)
  const [playerPosition, setPosition] = useState(0)

  const playPause: Function = async (): Promise<void> => {
    let promise
    if (player.current) {
      if (player.current.paused || player.current.ended) {
        promise = player.current.play().then(() => setStatus('playing'))
      } else {
        promise = Promise.resolve(player.current.pause())
        setStatus('paused')
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
      setStatus('paused')
    } else {
      promise = Promise.resolve()
    }
    return promise
  }

  const playerHandlers = {
    playPause,
    stop,
  }

  if (player.current) {
    player.current.addEventListener('timeupdate', e => {
      if (player.current) {
        setPosition(player.current.currentTime)
      }
    })

    player.current.addEventListener('pause', e => {
      setStatus('paused')
    })

    player.current.addEventListener('timeupdate', e => {
      if (player.current && progress.current && progressBar.current) {
        setPosition(player.current.currentTime)
        setDuration(player.current.duration)
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
      <VideoControls
        player={player.current}
        position={playerPosition}
        duration={playerDuration}
        status={playerStatus}
        handlers={playerHandlers}
      />
    </Wrapper>
  )
}

export default VideoPlayer

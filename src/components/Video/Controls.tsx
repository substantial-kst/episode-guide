import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React, { createRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpand,
  faPause,
  faPlay,
  faStop,
  faVolumeDown,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'

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
  const progress = createRef<HTMLProgressElement>()
  const progressBar = createRef<HTMLSpanElement>()

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
            }}
          />
        </li>
        <li>
          <PlayerButton
            icon={faStop}
            handler={() => {
              handlers.stop()
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

export default VideoControls

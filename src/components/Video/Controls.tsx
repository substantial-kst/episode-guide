import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
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
  if (!document.createElement('video').canPlayType) {
    return <></>
  } else {
    if (player) player.removeAttribute('controls')
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
          <progress
            id="progress"
            value={position ? position.toString() : '0'}
            max={duration ? duration.toString() : '0'}
          >
            <span
              id="progress-bar"
              style={
                position && duration
                  ? { width: Math.floor((position / duration) * 100) + '%' }
                  : {}
              }
            />
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

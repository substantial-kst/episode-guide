import React, { createRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import VideoControls from './Controls'

const Wrapper = styled.figure`
  margin: 1rem 10%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1px;
  display: inline-block;
  transition: opacity 0.25s ease-in;
  opacity: 1;

  &.hidden {
    opacity: 0;
  }

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

const VideoPlayer: React.FC = () => {
  const playerEl = player.current

  const [playerStatus, setStatus] = useState('stopped')
  const [playerReady, setReady] = useState(false)
  const [playerDuration, setDuration] = useState(0)
  const [playerPosition, setPosition] = useState(0)

  const playPause: Function = async (): Promise<void> => {
    let promise
    if (playerEl) {
      if (playerEl.paused || playerEl.ended) {
        promise = playerEl.play().then(() => setStatus('playing'))
      } else {
        promise = Promise.resolve(playerEl.pause())
        setStatus('paused')
      }
    } else {
      promise = Promise.resolve()
    }
    return promise
  }

  const stop: Function = async (): Promise<void> => {
    let promise
    if (playerEl) {
      promise = playerEl.pause()
      playerEl.currentTime = 0
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

  const setReadyState: Function = (isReady: boolean) => {
    setReady(isReady)
  }

  useEffect(() => {
    if (playerEl) {
      if (playerEl.readyState > 1) {
        console.log('Ready state > 1')
        setReadyState(true)
      }

      playerEl.addEventListener('timeupdate', e => {
        if (playerEl) {
          setPosition(playerEl.currentTime)
        }
      })

      playerEl.addEventListener('pause', e => {
        console.log('Pausing from listener in useEffect')
        setStatus('paused')
      })

      playerEl.addEventListener('timeupdate', e => {
        if (playerEl) {
          setPosition(playerEl.currentTime)
          setDuration(playerEl.duration)
        }
      })
    }
  }, [playerEl])

  return (
    <Wrapper className={playerReady ? '' : 'hidden'}>
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

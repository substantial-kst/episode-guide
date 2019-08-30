import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'
import LoadingIndicator from './LoadingIndicator'

interface Props {
    programId: any
    selectedSeasonNumber: number
    seasons: Season[]
}

const Wrapper = styled.div`
  width: 20%;

  a {
    display: block;
    padding: 10px;
    border-radius: 10px;

    > * {
      line-height: 1.2em;
    }

    p,
    span {
      font-size: 0.7rem;
      color: black;
    }

    &.selected {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`

const initialData = {programId: '', seasons: [], selectedSeasonNumber: 0}

const SeasonList: React.FC<Props> = props => {
  const seasonPreview = () => {
    if (props.seasons.length === 0) {
        return <LoadingIndicator/>
    } else {
      return props.seasons.map((season: Season, idx: number) => (
        <Link
          to={`/${props.programId}/browse/${idx + 1}`}
          className={idx === props.selectedSeasonNumber - 1 ? 'selected' : ''}
          key={idx}
        >
          <h3>{season.name}</h3>
          <span>{`Episodes: ${season.episodeCount}`}</span>
        </Link>
      ))
    }
  }

    return <Wrapper>{seasonPreview()}</Wrapper>
}

export default SeasonList

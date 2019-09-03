import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`

enum ProgramLinkType {
  'browse' = 'Browse',
  'search' = 'Search',
}

const renderProgramLink = (
  themeKey: string,
  linkType: ProgramLinkType
): React.ReactElement => {
  if (themeKey && themeKey !== 'default') {
    return <NavLink to={`/${themeKey}/${linkType}/`}>{linkType}</NavLink>
  } else {
    return <></>
  }
}

const ProgramHeader: React.FC = () => {
  const Theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Home
      </Link>
      {renderProgramLink(Theme.currentTheme.themeKey, ProgramLinkType.browse)}
      {renderProgramLink(Theme.currentTheme.themeKey, ProgramLinkType.search)}
    </Wrapper>
  )
}
export default ProgramHeader

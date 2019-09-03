import React, { Fragment, useContext } from 'react'
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
const renderBrowse = (themeKey: string) => {
  if (themeKey && themeKey !== 'default') {
    return <NavLink to={`/${themeKey}/browse/`}>Browse</NavLink>
  }
}

const ProgramHeader: React.FC = props => {
  const Theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> Home
      </Link>
      {renderBrowse(Theme.currentTheme.themeKey)}
      <NavLink to={`/${Theme.currentTheme.themeKey}/search`}>Search</NavLink>
    </Wrapper>
  )
}
export default ProgramHeader

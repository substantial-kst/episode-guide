import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import styled from '@emotion/styled'

interface HeaderProps {
  show: boolean
}

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
    return <NavLink to={`/${themeKey}/browse`}>Browse</NavLink>
  }
}

const renderHeader = (shouldShow: boolean, themeKey: string) => {
  if (shouldShow) {
    return (
      <Wrapper>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Home
        </Link>
        {renderBrowse(themeKey)}
        <NavLink to={`/${themeKey}/search`}>Search</NavLink>
      </Wrapper>
    )
  } else {
    return <div></div>
  }
}

const Header: React.FC<HeaderProps> = ({ show }) => {
  const { currentTheme } = useContext(ThemeContext)
  return renderHeader(show, currentTheme.themeKey)
}

export default Header

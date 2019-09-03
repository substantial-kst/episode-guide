import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faHome,
  faTv,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 20px;
    cursor: pointer;

    &:first-of-type {
      margin-left: 0;
    }

    & > * {
      margin: 0 0.5rem 0 0;
    }
  }
`

enum ProgramLinkType {
  'browse' = 'Browse',
  'search' = 'Search',
}

const HeaderLinks: Record<string, any> = {
  home: {
    text: 'Home',
    icon: faHome,
  },
  back: {
    text: '',
    icon: faArrowLeft,
  },
  [ProgramLinkType.browse]: {
    text: 'Browse',
    icon: faTv,
  },
  [ProgramLinkType.search]: {
    text: 'Search',
    icon: faSearch,
  },
}

const renderProgramLink = (
  themeKey: string,
  linkType: string
): React.ReactElement => {
  if (themeKey && themeKey !== 'default') {
    return (
      <NavLink to={`/${themeKey}/${linkType.toLowerCase()}/`}>
        {renderLinkIconAndText(HeaderLinks[linkType])}
      </NavLink>
    )
  } else {
    return <></>
  }
}

const renderLinkIconAndText = (linkObj: { text: string; icon: any }) => {
  return (
    <>
      <FontAwesomeIcon icon={linkObj.icon} />
      {linkObj.text}
    </>
  )
}

const ProgramHeader: React.FC<{ backHandler: Function }> = props => {
  const { backHandler } = props
  const Theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <a
        onClick={e => {
          backHandler(e)
        }}
      >
        {renderLinkIconAndText(HeaderLinks.back)}
      </a>
      <NavLink to={'/'}>{renderLinkIconAndText(HeaderLinks.home)}</NavLink>
      {renderProgramLink(Theme.currentTheme.themeKey, ProgramLinkType.browse)}
      {renderProgramLink(Theme.currentTheme.themeKey, ProgramLinkType.search)}
    </Wrapper>
  )
}
export default ProgramHeader

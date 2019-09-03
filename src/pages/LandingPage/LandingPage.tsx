import React, { useContext } from 'react'
import styled from '@emotion/styled'
import ImageLink from '../../components/ImageLink'
import { ThemeContext } from '../../context/ThemeContext'
import Basic from '../../layouts/Basic'

interface ShowLink {
  showCode: string
  title: string
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  top: 0;
  left: 10%;
  width: 80%;
  text-align: center;
`

const showMapping: ShowLink[] = [
  {
    showCode: 'koth',
    title: 'King of the Hill',
  },
  {
    showCode: 'bburg',
    title: "Bob's Burgers",
    // },
    // {
    //     showCode: 'gg',
    //     title: 'Golden Girls'
    // },
    // {
    //     showCode: 'vb',
    //     title: 'Venture Bros.'
    // },
    // {
    //     showCode: 'fri',
    //     title: 'Friends'
    // },
    // {
    //     showCode: 'fra',
    //     title: 'Frasier'
  },
]

const LandingPage: React.FC = props => {
  const Theme = useContext(ThemeContext)

  Theme.setTheme('')
  return (
    <Basic>
      <Wrapper>
        {showMapping.map(show => (
          <ImageLink
            showCode={show.showCode}
            title={show.title}
            key={show.showCode}
          />
        ))}
      </Wrapper>
    </Basic>
  )
}

export default LandingPage

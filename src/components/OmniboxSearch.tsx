import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ComponentProps {
  query: string
  searchHandler: Function
  queryHandler: Function
}

const TextInput = styled.input`
      width: 100%;
      margin: 0.4rem 0 1rem;
      padding: 0.5rem;
      height: 2rem;
      border-radius: 1rem;
      outline: none;

      &,
      & + button {
        border: 1px solid rgba(0, 0, 0, 0.25);
      }
    }
`
let interval: any = null

const OmniboxSearch: React.FC<ComponentProps> = ({
  searchHandler,
  queryHandler,
  query,
}) => {
  let shouldSearch = false

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    clearInterval(interval)
    const inputValue: string = e.target.value
    queryHandler(inputValue)
    shouldSearch = true
    interval = setInterval(() => {
      if (shouldSearch) {
        shouldSearch = false
        searchHandler(inputValue)
      } else {
        clearInterval(interval)
      }
    }, 750)
  }

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault()
    searchHandler(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id="omnibox"
        placeholder="Characters, titles,..."
        onChange={e => handleInputChange(e)}
        value={query}
      />
      <button onClick={e => handleSubmit(e)}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </form>
  )
}

export default OmniboxSearch

import React, { useState } from 'react'

interface ComponentProps {
  searchHandler: any
}

const OmniboxSearch: React.FC<ComponentProps> = ({ searchHandler }) => {
  const [query, setQuery] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    let inputValue: string = e.target.value
    setQuery(inputValue)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    searchHandler(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="omnibox"
        placeholder="Characters, titles,..."
        onChange={e => handleInputChange(e)}
      />
    </form>
  )
}

export default OmniboxSearch

import React from 'react'
import styled from '@emotion/styled'

interface Props {
  summary: string
  context?: string
}

interface LineClamp {
  context?: string
}

const Wrapper = styled.p<LineClamp>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props: LineClamp) =>
    props.context === 'preview' ? '2' : '20'};
  overflow: hidden;
`

const TextSummary: React.FC<Props> = ({ context, summary }) => (
  <Wrapper context={context}>{summary}</Wrapper>
)

export default TextSummary

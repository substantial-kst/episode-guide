import React from 'react';
import styled from "@emotion/styled";

interface Props {
  summary: string
  context: string
}

const Wrapper = styled.p<Props>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props: Props) => (props.context === 'preview' ? '2' : '20')};
  overflow: hidden;
`;

const TextSummary: React.FC<Props> = ({context, summary}) => (
    <Wrapper context={context} summary={summary}>
      {summary}
    </Wrapper>
);

export default TextSummary;

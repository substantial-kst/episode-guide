import * as React from 'react';

interface Props {
  summary: string;
}

const TextSummary: React.FunctionComponent<Props> = props => (
  <p>{props.summary}</p>
);

export default TextSummary;

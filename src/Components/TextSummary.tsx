import * as React from 'react';

type Props = {
  summary: string;
};

const TextSummary: React.FunctionComponent<Props> = props => (
  <p>{props.summary}</p>
);

export default TextSummary;

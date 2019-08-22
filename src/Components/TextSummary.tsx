import * as React from 'react';

interface Props {
  summary: string;
}

const TextSummary: React.FC<Props> = props => <p>{props.summary}</p>;

export default TextSummary;

import * as React from 'react';

export interface Props {
  summary: string;
}

const TextSummary = ({ summary }: Props) => <p>{summary}</p>;

export default TextSummary;

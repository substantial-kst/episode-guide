import React from 'react';

interface Props {
  idString: string;
}

const EpisodeIdentifier: React.FC<Props> = props => {
  const formatIdString = (id: string) => {
    const seasonRegEx = /^(s)([0-9]{2})/;
    const episodeRegEx = /(e)([0-9]{2})$/;
    const seasonString = id.replace(seasonRegEx, 'Season $2');
    const formatted = seasonString.replace(episodeRegEx, ', Episode $2');
    return formatted;
  };

  return (
    <p>
      <i>{formatIdString(props.idString)}</i>
    </p>
  );
};

export default EpisodeIdentifier;

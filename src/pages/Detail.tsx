import * as React from 'react';

interface Props {
  episodeId: string;
}

const Detail: React.FC<Props> = ({ episodeId }) => {
  // fetch episode by program & id

  return (
    <div>
      <p>{episodeId}</p>
    </div>
  );
};

export default Detail;

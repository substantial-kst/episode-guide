import * as React from 'react';

const Detail: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div>
      <img src={episode.image} />
      <h2>{episode.title}</h2>
      <p>{episode.id}</p>
      <p>{episode.summary}</p>
      <p>
        {episode.broadcast.month}/{episode.broadcast.date}/
        {episode.broadcast.year}
      </p>
      {episode.characters.map((charcter: string, i: number) => (
        <span key={i}>{charcter}</span>
      ))}
      {episode.guests.map((guest: string, i: number) => (
        <span key={i}>{guest}</span>
      ))}
    </div>
  );
};

export default Detail;

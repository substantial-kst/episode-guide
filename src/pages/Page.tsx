import React from 'react';
import Basic from '../layouts/Basic';
import Header from '../components/Header';
import Search from './Search';
import LandingPage from './LandingPage';
import Detail from './Detail';

interface PageProps {
  location: {
    pathname: string;
    state?: { episode: Episode };
  };
  match: {
    params: {
      programId: string;
    };
  };
}

const Page: React.FC<PageProps> = props => {
  const getEpisodeFromState = (props: PageProps): any => {
    if (props !== undefined) {
      if (props.location !== undefined) {
        if (props.location.state !== undefined) {
          return props.location.state.episode;
        }
      }
    }
    return null;
  };

  const getPageComponent = (props: PageProps) => {
    console.log('Page props: ', props);
    const currentRoute = props.location.pathname;
    const episode = getEpisodeFromState(props);
    if (currentRoute.indexOf('search') > -1) {
      return <Search programId={getProgramId(props)} />;
    } else if (episode) {
      return <Detail episode={episode} />;
    } else {
      return <LandingPage />;
    }
  };

  const getProgramId = (props: PageProps) => {
    return props.match.params.programId;
  };

  return (
    <Basic theme={getProgramId(props)}>
      <Header />
      {getPageComponent(props)}
    </Basic>
  );
};

export default Page;

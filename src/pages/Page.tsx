import React from 'react';
import Basic from '../layouts/Basic';
import Header from '../components/Header';
import Search from './Search';
import LandingPage from './LandingPage';
import Detail from './Detail';
import Browse from "./Browse";

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

    const currentRoute: string = props.location.pathname;
    const episode = getEpisodeFromState(props);
    const singleEpisodeRoute = /s[0-9]{2}e[0-9]{2}$/;
    const episodeRouteIdIndex = currentRoute.search(singleEpisodeRoute);

    if (currentRoute.indexOf('search') > -1) {
      return <Search programId={getProgramId(props)} />;
    } else if (episodeRouteIdIndex > -1) {
      return (
        <Detail
          episode={episode}
          id={currentRoute.substr(episodeRouteIdIndex)}
          programId={getProgramId(props)}
        />
      );
    } else if (!!getProgramId(props) && currentRoute.indexOf('browse') > -1) {
      return <Browse programId={getProgramId(props)} location={props.location} match={props.match} />
    } else {
      return <LandingPage />;
    }
  };

  const getProgramId = (props: PageProps) => {
    return props.match.params.programId;
  };

  const shouldShowHeader = (props:PageProps) => {
    if (props !== undefined) {
      if (props.location !== undefined) {
        if (props.location.pathname !== undefined) {
          return !(props.location.pathname === '/');
        }
      }
    }
    return true;
  }

  return (
    <Basic theme={getProgramId(props)}>
      <Header show={shouldShowHeader(props)}/>
      {getPageComponent(props)}
    </Basic>
  );
};

export default Page;

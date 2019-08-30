import React, { useContext } from 'react';
import Basic from '../../layouts/Basic';
import Header from '../../components/Header';
import Search from '../Search/Search';
import LandingPage from '../LandingPage/LandingPage';
import Detail from '../Detail/Detail';
import Browse from '../Browse/Browse';
import { ThemeContext, IThemeContext } from '../../context/ThemeContext';
import { RouteChildrenProps } from 'react-router';

const singleEpisodeRegex = /s[0-9]{2}e[0-9]{2}$/;

const shouldShowHeader = (props:RouteChildrenProps):boolean => {
  const { pathname } = props.location;
  const regex = new RegExp(/browse|search/);
  const match = pathname.match(regex) || pathname.match(singleEpisodeRegex) || '';
  return Boolean(getProgramId(props)
      && pathname
      && match.length > 0
  );
};

const getProgramId = (props: RouteChildrenProps):string => {
  const params:any = props.match && props.match.params;
  return params ? params.programId : '';
};

const getPageComponent = (props: RouteChildrenProps) => {
  const currentRoute: string = props.location.pathname;
  const episode = getEpisodeFromState(props);
  const episodeRouteIdIndex = currentRoute.search(singleEpisodeRegex);

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
    const params:any = props.match && props.match.params;
    return <Browse programId={getProgramId(props)} seasonNumber={params.season || 1} />
  } else {
    return <LandingPage />;
  }
};
      );
    } else if (!!getProgramId(props) && currentRoute.indexOf('browse') > -1) {
      return (
        <Browse
          programId={getProgramId(props)}
          seasonNumber={props.match.params.season || 1}
        />
      );
    } else {
      return <LandingPage />;
    }
  };

const getEpisodeFromState = (props: RouteChildrenProps):Episode|null => {
  if (props !== undefined) {
    if (props.location !== undefined) {
      if (props.location.state !== undefined) {
        return props.location.state.episode;
      }
    }
  }
  return null;
};

const Page: React.FC<RouteChildrenProps> = props => {
  const Theme:IThemeContext = useContext(ThemeContext);

  Theme.setTheme(getProgramId(props));
  return (
    <Basic data-theme-key={getProgramId(props)}>
      <Header show={shouldShowHeader(props)} />
      {getPageComponent(props)}
    </Basic>
  );
};

export default Page;

export const _testUtils:Record<string, Function> = {
  shouldShowHeader,
  getProgramId,
  getPageComponent,
  getEpisodeFromState,
};
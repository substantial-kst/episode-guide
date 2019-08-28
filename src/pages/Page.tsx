import React, {useContext} from 'react';
import Basic from '../layouts/Basic';
import Header from '../components/Header';
import Search from './Search';
import LandingPage from './LandingPage';
import Detail from './Detail';
import Browse from "./Browse";
import { ThemeContext, IThemeContext } from "../context/ThemeContext";

interface PageProps {
  location: {
    pathname: string;
    state?: { episode: Episode };
  };
  match: {
    params: {
      programId: string;
      season: number;
    };
  };
}

const Page: React.FC<PageProps> = props => {
  const Theme:IThemeContext = useContext(ThemeContext);

  const getProgramId = (props: PageProps) => {
    return props.match.params.programId;
  };

  Theme.setTheme(getProgramId(props));
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
      return <Browse programId={getProgramId(props)} seasonNumber={props.match.params.season} />
    } else {
      return <LandingPage />;
    }
  };

  const shouldShowHeader = (props:PageProps) => {
    const location = props.location;
    const pathname = location && location.pathname;
    const regex = new RegExp(/browse|search/);
    const match = pathname.match(regex) || ''
    // @ts-ignore
    return Boolean(getProgramId(props)
        && location
        && pathname
        && match.length > 0
    );
  }

  return (
    <Basic>
      <Header show={shouldShowHeader(props)}/>
      {getPageComponent(props)}
    </Basic>
  );
};

export default Page;

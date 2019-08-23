import React from "react";
import Basic from "../layouts/Basic";
import Header from "../components/Header";
import Search from "./Search";
import LandingPage from "./LandingPage";

interface PageProps {
    location: {
        pathname: string
    }
    match: {
        params: {
            programId: string
        }
    }
}

const Page: React.FC<PageProps> = props => {
    const getPageComponent = (props: PageProps) => {
        console.log('Page props: ', props)
        const currentRoute = props.location.pathname;
        if (currentRoute.indexOf('search') > -1) {
            return (<Search programId={getProgramId(props)} />);
        }
        else {
            return (<LandingPage />)
        }
    };

    const getProgramId = (props: PageProps) => {
        return props.match.params.programId;
    };

    return (
        <Basic theme={getProgramId(props)}>
            <Header/>
            { getPageComponent(props) }
        </Basic>
    );
};

export default Page;
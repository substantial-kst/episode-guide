import React from 'react';
import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Page, {_testUtils} from "./Page";
import {RouteChildrenProps, Router} from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import Browse from "../Browse/Browse";
import Search from "../Search/Search";
import Detail from "../Detail/Detail";

const renderTestComponent = (Component:React.FC<RouteChildrenProps>, props: any):RenderResult => {
    return render(<Component {...props}/>);
};

describe('Page component', () => {
    const fakeEpisode:Episode = {
        showCode: 'ProgramId',
        id: 's04e99',
        season: 4,
        episode: 99,
        image: '',
        poster: '',
        summary: 'Fake episode summary',
        title: 'Fake Title',
        guests: [],
        characters: [],
        tags: [],
        broadcast: {
            year: '1999',
            month: '01',
            date: '01'
        }
    };
    const LandingPageRouteProps:any = {
        location: {
            pathname: '/'
        }
    };
    const BrowsePageRouteProps:any = {
        location: {
            pathname: '/ProgramId/browse'
        },
        match: {
            params: {
                programId: 'ProgramId'
            }
        }
    };
    const SearchPageRouteProps:any = {
        location: {
            pathname: '/ProgramId/search'
        },
        match: {
            params: {
                programId: 'ProgramId'
            }
        }
    };
    const DetailPageRouteProps:any = {
        location: {
            pathname: '/ProgramId/s04e99',
            state: { episode: fakeEpisode }
        },
        match: {
            params: {
                programId: 'ProgramId',
                episodeId: 's04e99'
            }
        }
    };

    describe('internal methods', () => {
        describe('showHeader()', () => {
            const sut = _testUtils.shouldShowHeader;
            describe('returns a boolean', () => {
                it('Root Path: false', () => {
                    expect(sut(LandingPageRouteProps)).toBe(false);
                });
                it('Browse: true', () => {
                    expect(sut(BrowsePageRouteProps)).toBe(true);
                });
                it('Search: true', () => {
                    expect(sut(SearchPageRouteProps)).toBe(true);
                });
                it('Detail: true', () => {
                    expect(sut(DetailPageRouteProps)).toBe(true);
                });
            });
        });

        describe('getProgramId()', () => {
            const sut = _testUtils.getProgramId;
            describe('returns a string', () => {
                it(`Root Path: ''`, () => {
                    expect(sut(LandingPageRouteProps)).toBe('');
                });
                it(`/ProgramId/browse -> 'ProgramId'`, () => {
                    expect(sut(BrowsePageRouteProps)).toBe('ProgramId');
                });
                it(`/ProgramId/search -> 'ProgramId'`, () => {
                    expect(sut(SearchPageRouteProps)).toBe('ProgramId');
                });
                it(`/ProgramId/s04e99 -> 'ProgramId'`, () => {
                    expect(sut(BrowsePageRouteProps)).toBe('ProgramId');
                });
            });
        });

        describe('getPageComponent()', () => {
            const sut = _testUtils.getPageComponent;
            describe('returns a component', () => {
                it(`Root Path: <LandingPage>`, () => {
                    expect(sut(LandingPageRouteProps)).toStrictEqual(<LandingPage />);
                });
                it(`/ProgramId/browse -> <Browse>`, () => {
                    expect(sut(BrowsePageRouteProps))
                        .toStrictEqual(
                        <Browse
                            programId={BrowsePageRouteProps.match.params.programId}
                            seasonNumber={1}
                        />);
                });
                it(`/ProgramId/search -> <Search>`, () => {
                    expect(sut(SearchPageRouteProps))
                        .toStrictEqual(
                            <Search programId={SearchPageRouteProps.match.params.programId}/>
                            );
                });
                it(`/ProgramId/s04e99 -> <Detail>`, () => {
                    expect(sut(DetailPageRouteProps)).toStrictEqual(
                        <Detail
                            episode={fakeEpisode}
                            id={DetailPageRouteProps.match.params.episodeId}
                            programId={DetailPageRouteProps.match.params.programId}
                        />
                    );
                });
            });
        });

        describe('getEpisodeFromState()', () => {
            const sut = _testUtils.getEpisodeFromState;
            describe('returns a single Episode from route state', () => {
                it(`Root Path: null`, () => {
                    expect(sut(LandingPageRouteProps))
                        .toBeNull();
                });
                it(`/ProgramId/browse -> null`, () => {
                    expect(sut(BrowsePageRouteProps))
                        .toBeNull();
                });
                it(`/ProgramId/search -> null`, () => {
                    expect(sut(SearchPageRouteProps))
                        .toBeNull();
                });
                it(`/ProgramId/s04e99 -> Fake Episode`, () => {
                    expect(sut(DetailPageRouteProps))
                        .toStrictEqual(fakeEpisode);
                });
            });
        });
    });

    // describe('rendered component', () => {
    //     it(`Root Path: <LandingPage>`, () => {
    //         const {} = render(<Router history={{}}>
    //             <Page {...LandingPageRouteProps}></Page>
    //         </Router>)
    //         // expect(sut(LandingPageRouteProps)).toStrictEqual(<LandingPage />);
    //     });
    //     it(`/ProgramId/browse -> <Browse>`, () => {
    //         expect(sut(BrowsePageRouteProps))
    //             .toStrictEqual(
    //                 <Browse
    //                     programId={BrowsePageRouteProps.match.params.programId}
    //                     seasonNumber={1}
    //                 />);
    //     });
    //     it(`/ProgramId/search -> <Search>`, () => {
    //         expect(sut(SearchPageRouteProps))
    //             .toStrictEqual(
    //                 <Search programId={SearchPageRouteProps.match.params.programId}/>
    //             );
    //     });
    //     it(`/ProgramId/s04e99 -> <Detail>`, () => {
    //         expect(sut(DetailPageRouteProps)).toStrictEqual(
    //             <Detail
    //                 episode={fakeEpisode}
    //                 id={DetailPageRouteProps.match.params.episodeId}
    //                 programId={DetailPageRouteProps.match.params.programId}
    //             />
    //         );
    //     });
    // });
});
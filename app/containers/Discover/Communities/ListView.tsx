import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";
import CommunityCard from "../../../components/Card/CommunityCard";
import Masonry from "../../../components/Masonry";
import Link from 'next/link'
import Loading from "../../../components/Loading";
import { searchCommunities_searchCommunities } from "../../../queries/__generated__/searchCommunities";

interface IProps {
  CommunityQuery: {
    error: string;
    searchCommunities?: searchCommunities_searchCommunities;
  };
  hostName: string;
  routeChangeAction(route: string): void;
}

export const CommunitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  padding-bottom: 0;
  max-width: ${props => props.theme.breakpoints[2]};
  > div {
    margin: 15px;
  }
`;

class Communities extends Component<IProps> {
  render() {
    if (this.props.CommunityQuery.error) {
      return null;
    } // TODO replace with an error message if exists

    const { searchCommunities } = this.props.CommunityQuery;

    return (
      <Fragment>
        <Head>
          <title>
            Beginner to Advanced Blockchain & Ethereum Tutorials | Communities -
            Kauri
          </title>
          <meta
            name="description"
            content="Discover the best collections of blockchain related articles, tutorials and how-to guides"
          />
          <link
            rel="canonical"
            href={`https://${this.props.hostName}/collections`}
          />
        </Head>
        {searchCommunities ? (
          <Masonry>
            {searchCommunities &&
              searchCommunities.content &&
              searchCommunities.content.map(
                (community, index) =>
                  community && (
                    <CommunityCard
                      key={index}
                      logo={community.avatar}
                      imageURL={community.avatar}
                      name={String(community.name)}
                      description={
                        community.description
                          ? community.description.split(".")[0]
                          : ""
                      }
                      cardHeight={310}
                      collectionCount={
                        (Array.isArray(community.approvedId) &&
                          String(
                            community &&
                              community.approvedId &&
                              community.approvedId.filter(
                                resource =>
                                  resource && resource.type === "COLLECTION"
                              ).length
                          )) ||
                        "0"
                      }
                      articleCount={
                        (Array.isArray(community.approvedId) &&
                          String(
                            community &&
                              community.approvedId &&
                              community.approvedId.filter(
                                resource =>
                                  resource && resource.type === "ARTICLE"
                              ).length
                          )) ||
                        "0"
                      }
                      // tags={community.tags}
                      linkComponent={(
                        childrenProps: React.ReactElement<any>
                      ) => (
                        <Link
                          href={`/community/${community && community.id}`}
                        >
                          {childrenProps}
                        </Link>
                      )}
                    />
                  )
              )}
          </Masonry>
        ) : (
          <Loading />
        )}
      </Fragment>
    );
  }
}

export default Communities;

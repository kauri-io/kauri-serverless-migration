import React from "react";
import styled from "styled-components";
import CollectionCard from "../../components/Card/CollectionCard";
import Link from 'next/link'
import Head from "next/head";
import PrimaryButton from "../../components/Button/PrimaryButton";
import {
  Title2,
  BodyCard,
} from "../../components/Typography";
import {getCollection_getCollection} from '../../queries/__generated__/getCollection'

const Container = styled.section`
  display: flex;
  height: calc(100vh - 76px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors["textPrimary"]};
  > :first-child {
    margin-bottom: ${props => props.theme.space[1]}px;
    color: white;
  }
  > :nth-child(2) {
    margin-bottom: ${props => props.theme.space[3]}px;
    color: white;
  }
  > :nth-child(3) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;

interface IProps {
  data: {
    getCollection: getCollection_getCollection
  }
  routeChangeAction: (route: string) => void;
  type: string;
}

class CollectionCreated extends React.Component<IProps> {
  render() {
    const {
      data: {
        getCollection: {
          id,
          description,
          dateCreated,
          owner,
          background,
          name,
          sections,
        },
      },
      routeChangeAction,
      type,
    } = this.props;
    const copy = type === "updated" ? "updated" : "live";

    const articleCount =
      sections &&
      sections.reduce((current, next) => {
        if (next && Array.isArray(next.resources)) {
          const articlesInSection = next.resources.filter(
            sectionResource =>
              sectionResource &&
              sectionResource.__typename.toLowerCase().includes("article")
          );
          current += articlesInSection.length;
        }
        return current;
      }, 0);

    const collectionCount =
      sections &&
      sections.reduce((current, next) => {
        if (next && Array.isArray(next.resources)) {
          const collectionsInSection = next.resources.filter(
            sectionResource =>
              sectionResource &&
              sectionResource.__typename.toLowerCase().includes("collection")
          );
          current += collectionsInSection.length;
        }
        return current;
      }, 0);

    const ownerResource =
      owner && owner.__typename === "PublicUserDTO"
        ? {
            avatar: owner.avatar,
            id: owner.id || "not_found",
            type: "USER",
            username: owner.username,
          }
        : owner && owner.__typename === "CommunityDTO"
        ? {
            avatar: owner.avatar,
            id: owner.id || "not_found",
            type: "COMMUNITY",
            username: owner.name,
          }
        : {
            avatar: "",
            id: "",
            username: "",
          };

    return (
      <Container>
        <Head>
          <title>{`Collection ${copy} - Kauri`}</title>
        </Head>
        <Title2>Collection</Title2>
        <BodyCard>{`Your collection is now ${copy}`}</BodyCard>
        <CollectionCard
          id={id}
          description={description}
          date={dateCreated}
          name={name}
          username={ownerResource && ownerResource.username}
          userId={ownerResource && ownerResource.id}
          userAvatar={ownerResource && ownerResource.avatar}
          cardHeight={310}
          imageURL={background}
          articleCount={String(articleCount)}
          collectionCount={String(collectionCount)}
          resourceType={ownerResource.type || "USER"}
          linkComponent={(childrenProps, route) => (
            <Link
              href={route}
            >
              {childrenProps}
            </Link>
          )}
        />
        <PrimaryButton
          onClick={() => routeChangeAction(`/collection/${String(id)}`)}
        >
          View Collection
        </PrimaryButton>
      </Container>
    );
  }
}

export default CollectionCreated;

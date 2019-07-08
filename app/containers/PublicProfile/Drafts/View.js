// @flow
import React, { Fragment } from "react";
import styled from "styled-components";
import ArticleCard from "../../../../../kauri-components/components/Card/ArticleCard";
import { Link } from "../../../../routes";
import withPagination from "../../../../lib/with-pagination";
import PublicProfileEmptyState from "../../../../../kauri-components/components/PublicProfileEmptyState";
import { PrimaryButton } from "../../../../../kauri-components/components/Button";
import AlertView from "../../../../../kauri-components/components/Modal/AlertView";
import { BodyCard } from "../../../../../kauri-components/components/Typography";
import Masonry from "../../../../../kauri-components/components/Layout/Masonry";

import type { ArticlesProps } from "../types";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
`;

const Articles = ({
  data,
  type,
  routeChangeAction,
  isLoggedIn,
  closeModalAction,
  deleteDraftArticleAction,
  openModalAction,
}: ArticlesProps & {
  isLoggedIn: boolean,
}) => {
  const articles = data.searchArticles && data.searchArticles.content;
  return articles.length > 0 ? (
    <Fragment>
      <Masonry withPadding={false}>
        {articles.map(article => (
          <ArticleCard
            key={`${article.id}-${article.version}`}
            tags={article.tags}
            changeRoute={routeChangeAction}
            date={article.dateCreated}
            title={article.title}
            description={article.description}
            userId={
              type !== "toBeApproved" && article.owner
                ? article.owner.id
                : article.author.id
            }
            username={
              type !== "toBeApproved" && article.owner
                ? article.owner.username
                : article.author.username
            }
            userAvatar={
              type !== "toBeApproved" && article.owner
                ? article.owner.avatar
                : article.author.avatar
            }
            id={article.id}
            version={article.version}
            imageURL={article.attributes && article.attributes.background}
            nfts={article.associatedNfts}
            linkComponent={(childrenProps, route) => (
              <Link
                toSlug={route && route.includes("article") && article.title}
                useAnchorTag
                href={`/draft/${article.id}/${article.version}`}
              >
                {childrenProps}
              </Link>
            )}
            status={"DRAFT"}
            isLoggedIn={isLoggedIn}
            hoverChildren={() => (
              <PrimaryButton
                onClick={() =>
                  openModalAction({
                    children: (
                      <AlertView
                        closeModalAction={() => closeModalAction()}
                        confirmButtonAction={() =>
                          deleteDraftArticleAction(
                            { id: article.id, version: article.version },
                            closeModalAction
                          )
                        }
                        content={
                          <div>
                            <BodyCard>
                              You won't be able to retrieve the draft article
                              after deleting.
                            </BodyCard>
                          </div>
                        }
                        title={"Are you sure?"}
                      />
                    ),
                  })
                }
              >
                Delete draft
              </PrimaryButton>
            )}
          />
        ))}
      </Masonry>
    </Fragment>
  ) : (
    <Centered>
      <PublicProfileEmptyState
        moveIconLeftBecauseCSS
        iconSrc={"/static/images/icons/no-saved-drafts.svg"}
        description={
          "All of your draft articles will appear here. Create one now!"
        }
        title="No Saved Drafts"
        primaryButton={
          <PrimaryButton onClick={() => routeChangeAction("/write-article")}>
            Create Article
          </PrimaryButton>
        }
      />
    </Centered>
  );
};

export default withPagination(Articles, "searchArticles");

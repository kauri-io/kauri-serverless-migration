import React from "react";
import List from "./List";
import Header from "./Header";
import styled from "styled-components";
// import Tabs from "../../../../../kauri-components/components/Tabs";

const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CollectionDiscover = () => (
  <ContentContainer>
    <Header category={"COLLECTION"} />
    <List />
    {/* <Tabs
      dark={true}
      bg="bgPrimary"
      minWidth="100%"
      centerTabs={true}
      tabs={[
        {
          name: "Trending / Hot 🔥",
        },
        {
          name: "Last Posted",
        },
        {
          name: "Last Updated",
        },
        {
          name: "Random 😜",
        },
      ]}
      panels={[
        <List key="hot" scoringMode="TRENDING" />,
        <List key="posted" scoringMode="LAST_POSTED" />,
        <List key="updated" scoringMode="LAST_UPDATED" />,
        <List key="random" scoringMode="RANDOM" />,
      ]}
    /> */}
  </ContentContainer>
);

export default CollectionDiscover;

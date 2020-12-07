import React from "react";
import styled from "styled-components";
import json from "./data.json";
import LazyLoadRow from "./lazy-load-row";

const colorBackround = "#004E7C";

const Card = styled.div`
  width: 300px;
  padding: 2rem 1.5rem;
  border-radius: 3rem;
  background: ${colorBackround};
`;

const List = styled.div`
  position: relative;
  overflow: auto;
  height: 224px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LazyLoadCard = () => (
  <Card>
    <List>
      {json.map((obj) => (
        <LazyLoadRow
          key={obj._id}
          name={obj.name}
          background={obj.background}
        />
      ))}
    </List>
  </Card>
);

export default LazyLoadCard;

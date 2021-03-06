import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import LazyLoad from "react-lazy-load";

// const colorBackround = "#270f4b";
const colorBackround = "#004E7C";

const Avatar = styled.div`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`;

const Name = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;
  min-width: 60px;
  min-height: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${rgba("white", 0.85)};
`;

const loadingRow = css`
  position: absolute;
  z-index: 0;
  & > div {
    background: ${rgba("white", 0.125)};
  }
  & > ${Name} {
    height: 18px;
  }
`;

const Row = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background: ${colorBackround};
  ${(p) => p.isloading && loadingRow};
`;

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

const LazyLoadRow = ({ name, likes, background }) => (
  <>
    <Row isloading>
      <Avatar />
      <Name style={{ width: `${getRandom(30, 140)}px` }} />
    </Row>
    <LazyLoad height={56}>
      <Row>
        <Avatar style={{ background }}>{name.substring(0, 2)}</Avatar>
        <Name>{name}</Name>
      </Row>
    </LazyLoad>
  </>
);

export default LazyLoadRow;

import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";

function HomeLayout() {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default HomeLayout;
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  position: absolute;
  margin-top: 1000px;
  z-index: 1;
  /* margin-top: 1000px; */
  /* background-color: ${defaultTheme.colors.peru}; */
`;
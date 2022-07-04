import styled from "styled-components";

function HomeLayout({ children }) {
  return (
    <>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
}

export default HomeLayout;

const LayoutContainer = styled.div`
  background-color: var(--bgColor);
  height: calc(100vh - 100px);
  z-index: -1;
`;

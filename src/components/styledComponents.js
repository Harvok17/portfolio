import styled from "styled-components";
import dp from "../assests/display_photo.jpg";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Particles = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 500vh;
  background-color: #262626;
`;

export const MainWrapper = styled.div`
  flex: 1;
`;

export const Footer = styled.footer`
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const DisplayImage = styled.div`
  background-image: url(${dp});
  background-size: cover;
  background-position: center;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: auto;

  a {
    display: none;
  }
  &:hover {
    background-image: none;
    background-color: black;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const IconsWrapper = styled.div`
  padding: 2em;
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

export const SliderWrapper = styled.div`
  height: 250px;
  position: relative;
`;

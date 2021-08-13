import { boxShadow } from "components/Common/Styles";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  padding: 3rem 0;
  place-items: center;
  column-gap: 0rem;
  row-gap: 6rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;

// Paragraph needs to be defined above/before Card for hover to work
export const Paragraph = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  border: solid #00000000;
  border-width: 0px 8rem;

  background-color: #00000090;
  color: #e4e6e7;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);

  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: justify;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: none;
  width: 40rem;
  height: 70vh;
  overflow: hidden;
  position: relative;
  background-color: #ffffff10;
  transition: 0.5s ease-in-out;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
  }

  &:hover {
    box-shadow: ${boxShadow};
  }
  &:hover ${Paragraph} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1.8rem;
  margin: 2.2rem auto;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 0.5rem;
  color: #9cc9e3;
`;

export const Hr = styled.hr`
  width: 30%;
  height: 0.25rem;
  border: 0;
  background: linear-gradient(90deg, #f46737 0%, #945dd6 100%);
`;

export const Headline = styled.div`
  color: #dce3e7;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
  font-style: italic;
  margin: 1rem auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 2rem;
`;

export const Tag = styled.li`
  color: #fff;
  font-size: 1.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: #00000070;
`;

export const ExternalLink = styled.a`
  color: #f46737;
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    color: #fff;
  }
`;

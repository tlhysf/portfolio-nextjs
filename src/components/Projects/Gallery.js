import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Container = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 0%;
  max-height: 0%;
  min-height: 0%;
  overflow: hidden;
  opacity: 0;
  transition: 0.6s ease-in-out;

  @media ${(props) => !props.open} {
    opacity: 1;
    width: 100%;
    max-height: 100%;
    min-height: 100%;
    top: 0%;
    left: 0%;
  }
`;

const Paper = styled.div`
  position: relative;
  width: 95%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bg.tertiary + "70"};
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  row-gap: 2rem;

  margin: 0 auto;
  margin-top: 9rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 1rem;
  }
`;

const Button = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text.primary};
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent.primary};
  }
`;

const CloseButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavButton = styled(Button)`
  color: ${(props) => props.theme.colors.bg.primary};
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const NavButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
`;

export default function Gallery({ galleryState, setGalleryState }) {
  const { open, title, images } = galleryState;

  const [image, setImage] = useState(images[0]);

  //   const next = (element, list = images) => {
  //     const index = list.indexOf(element);
  //     setImage(index === list.length - 1 ? list[0] : list[index + 1]);
  //   };

  //   const previous = (element, list = images) => {
  //     const index = list.indexOf(element);
  //     setImage(index === 0 ? list[list.length - 1] : list[index - 1]);
  //   };

  console.log(images);

  useEffect(() => {
    setImage(galleryState.images[0]);
  }, [galleryState]);

  return (
    <Container open={open}>
      <Paper>
        <CloseButton
          onClick={(e) =>
            setGalleryState({ title: "", images: [], open: false })
          }
        >
          <AiOutlineCloseCircle />
        </CloseButton>

        <ImageContainer>
          <Image src={image} alt={title} />
          <NavButtons>
            <NavButton>Next</NavButton>
            <NavButton>Prev</NavButton>
          </NavButtons>
        </ImageContainer>

        {/* <button onClick={(e) => next(image)}>next</button>
      <button onClick={(e) => previous(image)}>previous</button> */}

        <Button>
          <a href={image} target="_blank">
            Full
          </a>
        </Button>
      </Paper>
    </Container>
  );
}

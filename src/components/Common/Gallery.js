import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlineCloseCircle,
  AiOutlineRightCircle,
  AiOutlineLeftCircle,
  AiOutlineFullscreen,
} from "react-icons/ai";

const Container = styled.div`
  position: fixed;
  z-index: ${(props) => props.theme.zIndexes.gallery};
  transition: 0.6s ease-in-out;
  overflow: hidden;

  top: 0%;
  left: 0%;

  max-height: 0%;
  min-height: 0%;
  width: 0%;

  @media ${(props) => !props.open} {
    max-height: 100%;
    min-height: 100%;
    width: 100%;
  }
`;

const Paper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: 1rem;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  margin: auto;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.open} {
    opacity: 0;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const buttonSize = 4;
const Button = styled.a`
  width: ${buttonSize}rem;
  height: ${buttonSize}rem;
  font-size: ${buttonSize - 1}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000070;
  color: #fff;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1);
  }
`;

export default function Gallery({ galleryState, setGalleryState }) {
  const { open, title, images } = galleryState;

  const [image, setImage] = useState(images[0]);

  const next = (element, list = images) => {
    const index = list.indexOf(element);
    setImage(index === list.length - 1 ? list[0] : list[index + 1]);
  };

  const previous = (element, list = images) => {
    const index = list.indexOf(element);
    setImage(index === 0 ? list[list.length - 1] : list[index - 1]);
  };

  useEffect(() => {
    setImage(galleryState.images[0]);
  }, [galleryState]);

  return (
    <Container open={open}>
      <Paper>
        <Image src={image} alt={title} />

        <ButtonsContainer open={open}>
          <ButtonGroup>
            <div />
            <Button
              onClick={(e) =>
                setGalleryState((state) => ({ ...state, open: false }))
              }
            >
              <AiOutlineCloseCircle />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>
              <AiOutlineLeftCircle onClick={(e) => previous(image)} />
            </Button>

            <Button onClick={(e) => next(image)}>
              <AiOutlineRightCircle />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button href={image} target="_blank">
              <AiOutlineFullscreen />
            </Button>
            <div />
          </ButtonGroup>
        </ButtonsContainer>
      </Paper>
    </Container>
  );
}

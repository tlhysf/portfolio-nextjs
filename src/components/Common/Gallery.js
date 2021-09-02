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

  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
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

  const [imageSrc, setImageSrc] = useState(images[0]);

  const next = (element, list = images) => {
    const index = list.indexOf(element);
    setImageSrc(index === list.length - 1 ? list[0] : list[index + 1]);
  };

  const previous = (element, list = images) => {
    const index = list.indexOf(element);
    setImageSrc(index === 0 ? list[list.length - 1] : list[index - 1]);
  };

  const clearStateFirst = (callback) => {
    setImageSrc(null);
    setTimeout(() => {
      callback();
    }, 1);
  };

  useEffect(() => {
    setImageSrc(galleryState.images[0]);
  }, [galleryState]);

  const renderCount = (element, list = images) => (
    <small>
      <strong>
        {list.indexOf(element) + 1}&nbsp;/&nbsp;{list.length}
      </strong>
    </small>
  );

  return (
    <Container open={open}>
      <Paper>
        <Image src={imageSrc ? imageSrc : "spinner.gif"} alt={title} />

        <ButtonsContainer open={open}>
          <ButtonGroup>
            {renderCount(imageSrc)}
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
              <AiOutlineLeftCircle
                onClick={(e) => clearStateFirst(() => previous(imageSrc))}
              />
            </Button>

            <Button onClick={(e) => clearStateFirst(() => next(imageSrc))}>
              <AiOutlineRightCircle />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button href={imageSrc} target="_blank">
              <AiOutlineFullscreen />
            </Button>
            <div />
          </ButtonGroup>
        </ButtonsContainer>
      </Paper>
    </Container>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  border-radius: 4px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const ProductionCompany = ({id, imageUrl, name, country}) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl
            ? `https://image.tmdb.org/t/p/w300${imageUrl}`
            : require('../assets/noPosterSmall.png')
        }
      />
    </ImageContainer>
    <Title>
      {name} / {country}{' '}
    </Title>
  </Container>
);

ProductionCompany.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ProductionCompany;

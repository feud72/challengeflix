import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 188px;
  border-radius: 4px;
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

const ProductionCompany = ({companies}) => (
  <Section title="Production Company">
  {companies &&
    companies.map((company, index) => (
      <React.Fragment key={company.id}>
      <Container>
      <ImageContainer>
      <Image
        bgUrl={
          company.logo_path
            ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
            : require('../assets/noPosterSmall.png')
        }
      />
    </ImageContainer>
    <Title>{company.name}<br/>{company.origin_country?company.origin_country:""}</Title>
    </Container>
    </React.Fragment>
      ))}
</Section> 
);

ProductionCompany.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  logo_path: PropTypes.string,
  origin_country: PropTypes.string.isRequired,}))
};

export default ProductionCompany;

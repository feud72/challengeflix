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

const Seasons = ({seasons}) => (
  <Section title="Seasons">
  {seasons &&
    seasons.filter((season) => season.air_date != null).map((season, index) => (
      <React.Fragment key={season.id}>
      <Container>
      <ImageContainer>
      <Image
        bgUrl={
          season.poster_path
            ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
            : require('../assets/noPosterSmall.png')
        }
      />
    </ImageContainer>
    <Title>{season.name}<br/>
    {season.episode_count} episodes</Title>
    </Container>
    </React.Fragment>
      ))}
</Section> 
);

Seasons.propTypes = {
  seasons: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      name: PropTypes.string,
      episode_count : PropTypes.number,
  }))
};

export default Seasons;

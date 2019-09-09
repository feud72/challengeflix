import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import ProductionCompany from 'Components/ProductionCompany';
import Videos from 'Components/Videos';
import Seasons from 'Components/Seasons';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;  
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 90%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  vertical-align: middle;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  vertical-align: middle;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({result, loading, error}) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{' '}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/noPosterSmall.png')
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}{' '}
            {result.imdb_id && (
              <a
                href={`https://imdb.com/title/${result.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="IMDb icon"
                  src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
                  width="45"
                  height="24"
                />
              </a>
            )}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>|</Divider>
            <Item>
              {result.runtime || result.episode_run_time
                ? `${result.runtime ? result.runtime : ''}${
                    result.episode_run_time ? result.episode_run_time[0] : ''
                  } min`
                : '-'}
            </Item>
            <Divider>|</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `,
                )}
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              {result.production_countries &&
                result.production_countries.map((country, index) =>
                  index === result.production_countries.length - 1
                    ? country.name
                    : `${country.name} / `,
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <ItemContainer>
            {result.production_companies && <ProductionCompany companies={result.production_companies} />}         
            {result.seasons && <Seasons seasons={result.seasons} />}    
            {result.videos.results.length > 0 && <Videos videoList={result.videos.results} />}
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;

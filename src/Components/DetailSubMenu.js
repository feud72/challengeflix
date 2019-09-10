import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ProductionCompany from 'Components/ProductionCompany';
import Videos from 'Components/Videos';
import Seasons from 'Components/Seasons';

const Container = styled.div``;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Divider = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
  margin-left: 5px;
`;

const DetailSubMenu = ({result}) => {
  const [menu, setMenu] = useState('Companies');
  const [content, setContent] = useState('');
  useEffect(() => {
    setContent(
      result.production_companies && menu === 'Companies' ? (
        <ProductionCompany companies={result.production_companies} />
      ) : result.videos &&
        result.videos.results.length > 0 &&
        menu === 'Videos' ? (
        <Videos videoList={result.videos.results} />
      ) : result.seasons && menu === 'Seasons' ? (
        <Seasons seasons={result.seasons} />
      ) : (
        ''
      ),
    );
  }, [menu]);
  return (
    <>
      <TitleContainer>
        {' '}
        <Title onClick={() => setMenu('Companies')}>Production Companies</Title>
        <Divider>|</Divider>
        <Title onClick={() => setMenu('Videos')}>Videos</Title>
        {result.seasons ? (
          <>
            <Divider>|</Divider>
            <Title onClick={() => setMenu('Seasons')}>Seasons</Title>
          </>
        ) : (
          ''
        )}
      </TitleContainer>

      <Container>{content}</Container>
    </>
  );
};

export default DetailSubMenu;

import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const useWidth = () => {
  const [width, setWidth] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const elementWidth = ref.current ? ref.current.offsetWidth : 0;
    setWidth(elementWidth);
    return () => {};
  }, []);
  return {width, ref};
};

const Videos = ({videoList}) => {
  const {width, ref} = useWidth();
  return (
    <VideoContainer ref={ref}>
      <Title>Videos</Title>      
      {videoList.length > 0 && (
        <iframe
          title={videoList[0].key}
          src={`https://www.youtube.com/embed/${videoList[0].key}`}
          width={`${width >= 480 ? 480 : width}`}
          height={`${((width >= 480 ? 480 : width) * 9) / 16}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      )}
    </VideoContainer>
  );
};

export default Videos;

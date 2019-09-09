import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div``;

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
      {videoList.length > 0 && (
        <iframe
          title={videoList[0].key}
          src={`https://www.youtube.com/embed/${videoList[0].key}`}
          width={`${width}`}
          height={`${(width * 9) / 16}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      )}
    </VideoContainer>
  );
};

export default Videos;

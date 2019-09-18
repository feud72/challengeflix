import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  margin-bottom: 15px;
`;

const Container = styled.div``;

const VideoList = styled.ul``;

const VideoItem = styled.li`
  line-height: 200%;
  cursor: pointer;
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
  return { width, ref };
};

const useGetKey = initialValue => {
  const [key, setKey] = useState(initialValue);
  useEffect(() => {
    return;
  }, [key]);
  return { key, setKey };
};

const Videos = ({ videoList }) => {
  const { width, ref } = useWidth();
  const { key, setKey } = useGetKey(
    videoList.length > 0 ? videoList[0].key : null
  );
  return (
    <>
      <VideoContainer ref={ref}>
        <Title>Videos</Title>
        {videoList.length > 0 ? (
          <iframe
            title={key}
            src={`https://www.youtube.com/embed/${key}`}
            width={`${width}`}
            height={`${(width * 9) / 16}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          "Can't find Youtube video!"
        )}
      </VideoContainer>
      <Container>
        {videoList.length > 0
          ? videoList.map((video, index) => (
              <VideoList>
                <VideoItem
                  onClick={() => setKey(video.key)}
                >{`> ${video.name}`}</VideoItem>
              </VideoList>
            ))
          : ""}
      </Container>
    </>
  );
};

export default Videos;

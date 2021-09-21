import mockDataVideos from '../../mockDatas/mockDataVideos'
import styled from 'styled-components'
import { device } from '../../utils/responsive/breakpoints'

const ContainerVideo = styled.div`
  width: 14.125rem;
  height: 10.9375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  @media ${device.laptop} {
    backgroung: red;
    width: 20.25rem;
    height: 13.625rem;
    left: 0rem;
    top: 0rem;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 7.9375rem;
  width: 100%;
  border-radius: 1rem;
  @media ${device.laptop} {
    height: 10.125rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  height: 7.9375rem;
  width: 100%;
  border-radius: 0.5rem;
  @media ${device.laptop} {
    height: 10.12rem;
  }
`
const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.438rem;
  margin-top: -7.6875rem;
  margin-left: 0.375rem;
  height: 1.5rem;
  width: 3.6875rem;
  background: #57667e;
  border-radius: 0.25rem;
  @media ${device.laptop} {
    margin-top: -9.6875rem;
  }
`
const TextTag = styled.p`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
`

const Time = styled.div`
  display: none;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.438rem;
    height: 1.87rem;
    width: 1.5625rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.25rem;
    margin-top: 5.625rem;
    margin-left: 0.375rem;
  }
`
const TextTime = styled.p`
  font-size: 0.75rem;
  color: #ffffff;
`
const ProgressBar = styled.div`
  width: 4.3537rem;
  height: 0.5625rem;
  background: #6ae1d3;
  margin-top: 5.625rem;
  border-bottom-left-radius: 0.5rem;
  @media ${device.laptop} {
    margin-top: 0.125rem;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem;
  width: 14.125rem;
  @media ${device.laptop} {
    width: 20.25rem;
  }
`
const TextTitle = styled.p`
  font-size: 0.875rem;
  display: flex;
  color: #1f252e;
  margin: 0.5rem 0rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`

const MockedVideoPreviews = mockDataVideos.map((item) => {
  return (
    <>
      <ContainerVideo>
        <Box>
          <Wrapper>
            <Image src={item.image} />
            <Tag>
              <TextTag>{item.tag}</TextTag>
            </Tag>
            <Time>
              <TextTime>{item.completedTime}</TextTime>
            </Time>
            <ProgressBar />
          </Wrapper>
        </Box>
        <Title>
          <TextTitle>{item.title}</TextTitle>
        </Title>
      </ContainerVideo>
    </>
  )
})

export default MockedVideoPreviews

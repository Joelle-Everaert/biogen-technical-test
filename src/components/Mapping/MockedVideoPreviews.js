import mockDataVideos from '../../mockDatas/mockDataVideos'
import styled from 'styled-components'
import { device } from '../../utils/responsive/breakpoints'

const ContainerVideo = styled.div`
  width: 14.125rem;
  height: 10.93rem;
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
  height: 7.93rem;
  width: 100%;
  border-radius: 1rem;
  @media ${device.laptop} {
    height: 10.12rem;
  }
`

const Image = styled.img`
  height: 7.93rem;
  width: 100%;
  border-radius: 0.5rem;
  @media ${device.laptop} {
    height: 10.12rem;
  }
`


const MockedVideoPreviews = mockDataVideos.map((item) => {
  return (
    <>
      <ContainerVideo>
        <Box>
        
            <Image src={item.image} />
            
        </Box>
       
      </ContainerVideo>
    </>
  )
})

export default MockedVideoPreviews

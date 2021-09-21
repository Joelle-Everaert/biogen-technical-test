import styled from 'styled-components'
import NavBar from './components/Layout'
import { device } from './utils/responsive/breakpoints'
import GeneralCarousel from './components/pages/Carousel'
import MockedVideoPreviews from './components/Mapping/MockedVideoPreviews'


const Title = styled.p`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  margin: 64px 0 16px 0;
  @media ${device.laptop}{
    margin: 64px 0 24px 0;
  }
`
const StyledLink = styled.a`
  color: #0087CD;
  text-decoration:none;
  padding-right: 1rem;
`


const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        
        <GeneralCarousel title={<Title>Zuletzt angesehen<StyledLink href='#'> Alle zeigen ({MockedVideoPreviews.length}) </StyledLink> </Title>} children={MockedVideoPreviews}/>
        
      
      </div>
    </>
  )
}

export default App
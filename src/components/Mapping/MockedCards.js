import mockDataCards from '../../mockDatas/mockDataCards'
import styled from 'styled-components'
import { device } from '../../utils/responsive/breakpoints'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const ContainerCard = styled.div`
  width: 14.25rem;
  height: 18.5rem;
  box-shadow: 0rem 0.25rem 2rem rgba(106, 119, 142, 0.25);
  border-bottom: 0.0063rem #CCCDCE solid;
  border-radius: 0.375rem;
  @media ${device.laptop} {
    width: 20.25rem;
    height: 21.4375rem;
    left: 0rem;
    top: 0rem;
  }
`
const Box = styled.div`
  display: flex;
  height: 9.625rem;
`
const Image = styled.img`
  height: 10.3125rem;
  @media ${device.laptop}{
    height: 14.1875rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.4375rem;
  justify-content: center;
  width: 4.375rem;
  height: 1.875rem;
  background: #ffffff;
  border-radius: 0.25rem;
  margin-top: 1rem;
  margin-left: -10rem;
  @media ${device.laptop}{
    margin-left: -13.75rem;
  }
`
const TextTag = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  align-items: center;
  margin: 0;
  color: #57667E;
`
const Score = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2.6rem;
  height: 1.3125rem;
  margin-top: 0.375rem;
  margin-left: 5.3125rem;
  @media ${device.laptop} {
    margin-left: 10.625rem;
    margin-top: 1rem;
  }
`
const TextScore = styled.p`
  font-size: 0.875rem;
  margin: 0;
`
const Icon = styled.div`
  margin: 0;
`
const IconsStyleStar = {
  color: '#0054F7',
}

const Play = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: #f0f2f5;
  margin-top: 6.25rem;
  margin-left: -3.75rem;
  cursor: pointer;
  border: none;
  @media ${device.laptop}{
    margin-top: 11.25rem;
  }
`
const IconsStylePlay = {
  color: '#57667E',
}
const WrapperTitle = styled.div`
  height: 6.875rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0.875rem;
  margin-top: 1rem;
  @media ${device.laptop}{
    margin-top: 5rem;
  }
`
const Title = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
`
const TextTitle = styled.p`
  font-size: 1rem;
  margin: 0;
`
const WrapperFollow = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top:0.8125rem;
  @media ${device.laptop}{
    margin-top: 0;
  }
`
const Followers = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: #57667e;
`
const IconPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  background-color: #f0f2f5;
  border-radius: 50%;
  cursor: pointer;
  border: none;
`
const IconsStylePlus = {
  color: '#57667E',
}

const MockedCards = mockDataCards.map((item) => {
  return (
    <>
      <ContainerCard>
        <Box>
          
          <Wrapper>
            <Image src={item.image} />

            <Tag>
              <TextTag>{item.tag}</TextTag>
            </Tag>

            <Score>
              {' '}
              <TextScore>{item.score} </TextScore>
              <Icon>
                <FontAwesomeIcon
                  type="none"
                  style={IconsStyleStar}
                  name="star"
                  value="star"
                  icon={faStar}
                />
              </Icon>
            </Score>

            <Play>
            <FontAwesomeIcon
                type="none"
                size="lg"
                style={IconsStylePlay}
                name="star"
                value="star"
                icon={faPlay}
              />
            </Play>

          </Wrapper>
        </Box>

        <WrapperTitle>

          <Title>
            <TextTitle>{item.title}</TextTitle>
          </Title>

          <WrapperFollow>
            <Followers>{item.follow} FOLGEN</Followers>
            <IconPlus>
              <FontAwesomeIcon
                type="none"
                style={IconsStylePlus}
                name="plus"
                value="plus"
                icon={faPlus}
              />
            </IconPlus>
          </WrapperFollow>

        </WrapperTitle>
      </ContainerCard>
    </>
  )
})

export default MockedCards

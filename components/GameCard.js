import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const Picture = styled.div`
  margin-right: 20px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

const Description = styled.div`
  margin-bottom: 20px;
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const GameCard = ({
  icon,
  name,
  description,
  code,
}) => (
  <Wrapper>
    <Picture><img src={icon} alt={name}/></Picture>
    <div>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Actions>
        <Button
          iconEnd='fas fa-chevron-right'
          href={`/game?code=${code}`}
          secondary
        >
          PLAY
        </Button>
      </Actions>
    </div>
  </Wrapper>
)
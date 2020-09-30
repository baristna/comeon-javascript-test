import styled from 'styled-components';
import { Avatar } from './Avatar';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SessionPanel = styled.div`
  flex-grow: 1;
`

const SessionPanelInner = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const SessionTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`

const SessionName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`

export const Panel = ({
  avatar,
  name,
  event,
}) => (
  <Wrapper>
    <SessionPanel>
      <SessionPanelInner>
        <Avatar src={avatar} />
        <SessionTexts>
          <SessionName>{name}</SessionName>
          <div>{event}</div>
        </SessionTexts>
      </SessionPanelInner>
    </SessionPanel>
    <div>
      <Button
        href='/logout'
        iconStart='fas fa-times'
        secondary
      >
        Logout
      </Button>
    </div>
  </Wrapper>
)

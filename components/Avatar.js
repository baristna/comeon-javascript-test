import styled from 'styled-components';

const Frame = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  display: inline-block;
`

export const Avatar = ({ src }) => (
  <Frame>
    <Image src={src} alt={src} />
  </Frame>
)

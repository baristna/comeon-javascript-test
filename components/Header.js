import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  width: 50%;
`

export const Header = () => {

  return (
    <LogoWrapper>
      <Logo src="/logo.svg" alt="Comeon Logo" />
    </LogoWrapper>
  )
}
import Link from 'next/link'
import styled from 'styled-components';

export const ButtonElement = styled.button`
  height: 40px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 15px;
  cursor: pointer;
  border-radius: 3px;

  background: ${p => p.secondary ? `#1b1c1d` : `#FFF`};
  color: ${p => p.secondary ? `#FFF` : `#000`};
`

export const Button = ({ children, href, iconStart, iconEnd, ...props}) => {

  const genButton = () => {
    return (
      <ButtonElement {...props}>
        {iconStart && <i aria-hidden className={iconStart} style={{ marginRight: '10px'}} />}
        {children}
        {iconEnd && <i aria-hidden className={iconEnd} style={{ marginLeft: '10px'}} />}
      </ButtonElement>
    )
  }

  return href ? (
    <Link href={href}>{genButton()}</Link>
  ) : (
    genButton()
  )
}

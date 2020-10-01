import Link from 'next/link'
import styled from 'styled-components';

export const ButtonElement = styled.button`
  height: ${p => p.big ? '60px' : '40px'};
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: ${p => p.big ? '0 30px' : '0 15px'};
  cursor: pointer;
  border-radius: 3px;
  ${p => p.big ? 'font-size: 20px;' : ''}

  background: ${p => p.secondary ? `#1b1c1d` : `#FFF`};
  color: ${p => p.secondary ? `#FFF` : `#000`};
  outline: none;
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

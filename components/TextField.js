import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  ${p => p.big ? `
    width: 400px;
  ` : ``}
`

const InputControl = styled.input`
  line-height: ${p => p.big ? '60px' : '40px'};
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: 3px;
  width: 100%;
  ${p => p.big ? 'font-size: 20px;' : ''}

  &:hover, &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }
`

const Icon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
`

export const TextField = ({ icon, style, big, ...props }) => {
  return (
    <Wrapper style={style} big={big}>
      <InputControl {...props} big={big} />
      {icon && <Icon className={icon} />}
    </Wrapper>
  )
}

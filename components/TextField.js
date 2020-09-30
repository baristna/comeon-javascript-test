import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`

const InputControl = styled.input`
  line-height: 40px;
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: 3px;
  width: 100%;

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

export const TextField = ({ icon, style, ...props }) => {
  return (
    <Wrapper style={style}>
      <InputControl {...props} />
      {icon && <Icon className={icon} />}
    </Wrapper>
  )
}

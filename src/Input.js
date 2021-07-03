import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
  placeholder: props.placeholder,

  size: props.size || ""
}))`
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.75rem 0;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  border-radius: 0.25rem;
  width: ${(props) => props.width};
  ::placeholder {
    color: ${(props) => props.color};
  }
`;

function Input({
  onChange,
  onClick,
  type,
  placeholder,
  value,
  color,
  background,
  width
}) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      color={color}
      width={width}
      background={background}
    />
  );
}

Input.defaultProps = {
  type: "text",
  color: "palevioletred",
  background: "papayawhip",
  placeholder: "placeholder value",
  
};

export default Input;

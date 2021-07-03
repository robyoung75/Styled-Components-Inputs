
import Input from "./Input";
import { useState } from "react";
import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

const Wrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
`;

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [file, setFile] = useState("");

  const handleUsername = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setUsername(target);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    const target = e.target.value;
    setPassword(target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      username: username !== "" ? username : user.username,
      password: password !== "" ? password : user.password
    });
    setUsername("");
    setPassword("");
  };

  const handleFile = (e) => {
    e.preventDefault();
    const target = e.target.files[0];
    console.log(target);
    setFile(target);
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setUser({});
    setFile("null");
    setPassword("");
    setUsername("");
  };

  return (
    <Wrapper
      isFlex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      background="dodgerblue"
      padding="2rem"
    >
      <h1>Styled Components</h1>
      <h2>Input Component</h2>
      <Input
        placeholder="Username"
        value={username}
        onChange={handleUsername}
        width="50%"
        background="white"
        
      />
      <p>{username}</p>
      <Input
        placeholder="Password"
        type="password"
        onChange={handlePassword}
        value={password}
        width="50%"
        background="white"
      />

      <p>{password}</p>
      <Input type="submit" onClick={handleSubmit} width="4rem" background="blue" />
      <p>username: {user.username}</p>
      <p>userPassword: {user.password}</p>
      <Input type="file" onChange={handleFile} width="50%" background="white" />
      <p>{file ? `File name: ${file.name}` : "File name:"}</p>
      <button onClick={handleClearAll}>Clear All</button>
    </Wrapper>
  );
}

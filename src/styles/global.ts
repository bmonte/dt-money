import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --blue: #5429CC;
  --blue-light: #6933FF;
  --green: #33CC95;
  --red: #E62E4D;

  --shape: #FFFFFF;
  --text-title: #363F5F;
  --text-body: #969CB3;

  --background: #F0F2F5;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content {
  width: 100%;
  max-width: 576px;

  background: var(--background);
  padding: 3rem;
  border: 0;
  border-radius: 0.24rem;
  outline: 0;

  position: relative;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  background: transparent;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
}
`;

export default GlobalStyle;
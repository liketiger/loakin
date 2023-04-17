import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  a {
    text-decoration:none;
    color:inherit;
  }

  * {
    box-sizing:border-box;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  .fc-highlight {
    display: none;
  }

  .fc-daygrid-day:hover {
    background-color: lightblue !important;
    cursor: pointer;
  }

  .fc-event {
    font-size: 16px;
  }
`;

export default GlobalStyle;
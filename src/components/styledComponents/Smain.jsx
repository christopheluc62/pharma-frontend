import styled from 'styled-components';

const StyledMain = styled.div`
  .main {
    height: auto;
    margin-bottom: 3em;
  }
  .new-member-form {
    margin: 1em 0 1em 0;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 0.5em;
  }

  input {
    margin-right: 0.5em;
    margin-top: 0.5em;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.8em;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  /* .member-list {
    columns: 3;
  } */

  .member {
    padding-top: 1.5em;
    font-weight: 600;
    font-size: 1.2em;
    width: auto;
    display: flex;
    justify-content: center;
    color: black;
  }
`;

export default StyledMain;

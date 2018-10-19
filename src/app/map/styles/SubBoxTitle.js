import styled from 'styled-components';

const SubBoxTitle = styled.a`
  font-family: Candara;
  font-weight: bold;
  line-height: normal;
  font-size: 35px;
  text-align: center;

  color: #0797BA;

  position: relative;
  float: left;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export default SubBoxTitle;

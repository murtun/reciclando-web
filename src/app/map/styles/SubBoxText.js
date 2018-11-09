import styled from 'styled-components';

const SubBoxText = styled.a`
  font-family: Candara;
  font-weight: bold;
  line-height: normal;
  font-size: 18px;
  white-space: ${props => props.whiteSpace};

  padding: ${props => props.padding};

  display: table-cell;
  vertical-align: middle;

  color: #000000;


  @media(max-width: 1024px) {
    font-size: 15px;
  }

    @media(max-width: 425px) {
    font-size: 10px;
  }
`;

export default SubBoxText;

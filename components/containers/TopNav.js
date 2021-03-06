import React, { useState, useEffect} from 'react'
import baseTheme from '../common/baseTheme'
import styled , { keyframes } from 'styled-components'
import theme from 'styled-theming'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAdjust  } from '@fortawesome/free-solid-svg-icons'
import { GridBox } from '../'

const navBackground = theme('mode', {
  main: baseTheme.colors.dark,
  secondary: baseTheme.colors.light
});

const navColor = theme('mode', {
  main: baseTheme.colors.light,
  secondary: baseTheme.colors.dark
});

const fading = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Nav = styled.nav`
  background-color: ${navBackground};
  padding: 5px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 20px;
  
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    width: 30%;

    li {
      a {
        display: block;
        margin-right: 10px;
        height: 20px;
      }
    }
  }
`;

const FaIcon = styled(FontAwesomeIcon)`
  height: 100%;
  color: ${navColor};
  opacity: 0.8;

  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  color:${navColor};
  font-size: 1.2em;
  text-align: center;
  animation: ${fading} 4s infinite;
`

const ChangeButtonContainer = styled.div`
  width: 30%;
  display: block;
  height: 20px;

  svg {
    float: right;
    cursor: pointer;
  }
`

const texts = ["Jonathan Dean","Developer", "Portfolio"];

const TopNav = (props) => {
  
  const [indexText, setindexText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindexText(indexText => indexText + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Nav>
      <GridBox>
        <NavContainer>
          <ul>
            <li>
              <a target="_blank" href="#github">
                <FaIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#github">
                <FaIcon icon={faGithubSquare} />
              </a>
            </li>
            <li>
              <a target="_blank" href="#github">
                <FaIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <Title>{texts[indexText % texts.length]}</Title>
          <ChangeButtonContainer>
            <FaIcon icon={faAdjust} onClick={props.handleTheme} />
          </ChangeButtonContainer>
        </NavContainer>
      </GridBox>
    </Nav>
  )
}

export default TopNav;

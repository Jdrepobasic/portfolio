import React from 'react'
import baseTheme from '../common/baseTheme'
import styled , { keyframes } from 'styled-components'
import theme from 'styled-theming'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { GridBox } from '../'

const navBackground = theme('mode', {
  main: baseTheme.colors.dark,
  secondary: baseTheme.colors.light
});

const navColor = theme('mode', {
  main: baseTheme.colors.light,
  secondary: baseTheme.colors.dark
});

const Nav = styled.nav`
  background-color: ${navBackground};
  padding: 5px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

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
`

const TopNav = () => (
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

        <Title>Jonathan Dean</Title>

      </NavContainer>
    </GridBox>
  </Nav>
)

export default TopNav

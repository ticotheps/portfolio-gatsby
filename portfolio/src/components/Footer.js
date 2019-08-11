import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.footer`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: #7c00e7;

  & a {
    color: #ffffff;
  }

  a:hover {
    color: #7c00e7;
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          roles
          socialLinks {
            id
            url
            name
            fontAwesomeIcon
          }
        }
      }
    `}
    render={data => {
      const { name, socialLinks } = data.contentfulAbout;

      return (
        <Box p={4} mt={0} backgroundColor="secondaryLight">
          <FooterContainer>
            <Flex>
              <Fade right>
                {socialLinks.map(({ id, ...rest }) => (
                  <Box
                    mx={[3, 4, 4, 4]}
                    mb={[5, 4, 3, 3]}
                    fontSize={5}
                    key={id}
                  >
                    <SocialLink {...rest} alt={'true'} />
                  </Box>
                ))}
              </Fade>
            </Flex>
            <Fade left>
              <TextFooter>
                <span>{`${name}'s Portfolio - Powered by `}</span>
                <Link href="https://www.gatsbyjs.org/" target="_blank">
                  Gatsby
                </Link>
                <span> and </span>
                <Link href="https://www.contentful.com/" target="_blank" mr={1}>
                  Contentful
                </Link>
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </TextFooter>
            </Fade>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;

import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text, Box, Flex } from "rebass";
import Fade from "react-reveal/Fade";
import SocialLink from "./SocialLink";

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
      const { socialLinks } = data.contentfulAbout;

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
                    <SocialLink {...rest} alt={"true"} />
                  </Box>
                ))}
              </Fade>
            </Flex>
            <Fade left>
              <TextFooter>
                <span>{`© 2019 Tico S. Thepsourinthone`}</span>
              </TextFooter>
            </Fade>
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;

import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Heading, Flex, Box, Image, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import tico from '../../media/tico-profile.jpg';
import smiley from '../../media/icon.png';

const Background = () => (
  <div>
    <Triangle
      color='backgroundDark'
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color='secondary'
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color='primaryDark'
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color='secondaryLight'
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const ProfilePicture = styled(Image)`
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0px auto 30px;
  border: 10px solid #3257fa;
  /* transition: all 0.25s ease-out; */
  position: absolute;
  left: 0;
  bottom: 2px;
  -webkit-transition: opacity 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 100;
  }
`;

const SmileyPicture = styled(Image)`
  box-sizing: border-box;
  border-radius: 50%;
  margin: 0px auto 30px;
  border: 8px solid #21ffb9;
  height: 205px;
  width: 205px;
  position: relative;
  left: 8px;
  bottom: 8px;
  -webkit-transition: opacity 0.4s ease-in-out;
  -moz-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 0;
  }
`;

const LandingPage = () => (
  <Section.Container id='home' Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
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
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Heading
              textAlign='center'
              as='h1'
              color='primary'
              fontSize={[5, 6, 7, 8]}
              mt={[6, 5, 4, 4]}
              mb={[4, 3, 2, 3]}
            >
              {`Hello, I'm ${name}!`}
            </Heading>

            <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
              <Box
                width={[1, 1, 2 / 6]}
                style={{
                  maxWidth: '220px',
                  maxHeight: '220px',
                  margin: 'auto',
                }}
              >
                <Fade right>
                  <div id='cf' style={{ position: 'relative' }}>
                    <ProfilePicture
                      className='bottom'
                      src={tico}
                      alt='Author'
                    />
                    <SmileyPicture
                      className='top'
                      src={smiley}
                      alt='Cool emoji'
                    />
                  </div>
                </Fade>
              </Box>
            </Flex>

            <Heading
              as='h2'
              color='primary'
              fontSize={[4, 5, 6, 6]}
              mt={[3, 3, 2, 2]}
              mb={[5, 5, 4, 4]}
              textAlign='center'
              style={centerHorizontally}
            >
              <TextLoop interval={2500}>
                {roles
                  .sort(() => Math.random() - 0.5)
                  .map(text => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>

            <Flex alignItems='center' justifyContent='center' flexWrap='wrap'>
              {socialLinks.map(({ id, ...rest }) => (
                <Box
                  mx={(4, 3, 3, 3)}
                  mb={4}
                  mt={[2, 0, 0, 0]}
                  fontSize={[4, 5, 6, 6]}
                  key={id}
                >
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section='about'>
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;

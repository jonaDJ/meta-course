import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  return (
    <Box className="header">
      <Box className="container">
        <HStack
          px={8}
          py={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <ButtonGroup>
              <Link to="/" className="nav-item">
                <Button colorScheme="facebook">BIO</Button>
              </Link>
              <Link to="/ProjectsSection" className="nav-item">
                <Button colorScheme="facebook">Skills</Button>
              </Link>
              <Link to="/ContactMeSection" className="nav-item">
                <Button colorScheme="facebook">Contact Me</Button>
              </Link>
            </ButtonGroup>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

import {
  githubIcon,
  linkedinIcon,
  spotifyIcon,
  vscoIcon,
} from '../images';
import { StyledDiv } from './common';

export const Socials = () => (
  <StyledDiv width="180px" display="flex" justifyContent="space-between">
    <a href="https://github.com/lilygostovic" rel="noreferrer" target="_blank">
      <img src={githubIcon} alt="link to github profile" height="30px" />
    </a>
    <a
      href="https://www.linkedin.com/in/lily-gostovic/"
      rel="noreferrer"
      target="_blank"
    >
      <img src={linkedinIcon} alt="link to linkedin profile" height="30px" />
    </a>
    <a
      href="https://open.spotify.com/user/lilygostovic?si=e5b093ac8ad54d74"
      rel="noreferrer"
      target="_blank"
    >
      <img src={spotifyIcon} alt="link to spotify profile" height="30px" />
    </a>
    <a
      href="https://vsco.co/lilygostovic/journal/p/1"
      rel="noreferrer"
      target="_blank"
    >
      <img src={vscoIcon} alt="link to vsco profile" height="30px" />
    </a>
  </StyledDiv>
);

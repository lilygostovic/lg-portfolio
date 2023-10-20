import {
  cameraIcon,
  githubIcon,
  linkedinIcon,
  spotifyIcon,
  stravaIcon,
} from '../images';
import { StyledDiv } from './common';

export const Socials = () => (
  <StyledDiv width="225px" display="flex" justifyContent="space-between">
    <a href="https://github.com/lilygostovic" rel="noreferrer" target="_blank">
      <img
        src={githubIcon}
        alt="link to github profile"
        height="25px"
        style={{ filter: "invert(100%) opacity(60%)" }}
      />
    </a>
    <a
      href="https://www.linkedin.com/in/lily-gostovic/"
      rel="noreferrer"
      target="_blank"
    >
      <img
        src={linkedinIcon}
        alt="link to linkedin profile"
        height="25px"
        style={{ filter: "invert(100%) opacity(60%)" }}
      />
    </a>
    <a
      href="https://www.strava.com/athletes/24607964"
      rel="noreferrer"
      target="_blank"
    >
      <img
        src={stravaIcon}
        alt="link to Strava profile"
        height="25px"
        style={{ filter: "invert(100%) opacity(60%)" }}
      />
    </a>
    <a
      href="https://open.spotify.com/user/lilygostovic?si=e5b093ac8ad54d74"
      rel="noreferrer"
      target="_blank"
    >
      <img
        src={spotifyIcon}
        alt="link to spotify profile"
        height="25px"
        style={{ filter: "invert(100%) opacity(60%)" }}
      />
    </a>
    <a
      href="https://photography.lilygostovic.com"
      rel="noreferrer"
      target="_blank"
    >
      <img
        src={cameraIcon}
        alt="link to photography website"
        height="25px"
        style={{ filter: "invert(100%) opacity(60%)" }}
      />
    </a>
  </StyledDiv>
);

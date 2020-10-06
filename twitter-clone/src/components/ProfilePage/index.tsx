import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>User's Name</h1>
        <h2>@user_name</h2>

        <p>
          Just another guy in the <a href="./#">World</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Sinop, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 30 fevereiro de 1980
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>23</strong>
          </span>
          <span>
            <strong>57 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;

import React from "react";
import {
  ProfileCard,
  ProfileCardColumn,
  ProfileCardInner,
  ProfileCardLabel,
  ProfileCardRow,
  ProfileCardTitle,
} from "../../components";
import { useAuthContext } from "../../store/context/auth/authContext";

const ProfileCardContainer: React.FC = () => {
  const { state } = useAuthContext();

  return (
    <ProfileCard>
      <ProfileCardInner>
        <ProfileCardColumn>
          <ProfileCardRow>
            <ProfileCardLabel> First Name </ProfileCardLabel>
            <ProfileCardTitle> {state.user!.first_name} </ProfileCardTitle>
          </ProfileCardRow>
          <ProfileCardRow>
            <ProfileCardLabel> Email </ProfileCardLabel>
            <ProfileCardTitle> {state.user!.email} </ProfileCardTitle>
          </ProfileCardRow>
        </ProfileCardColumn>
        <ProfileCardColumn>
          <ProfileCardRow>
            <ProfileCardLabel> Last Name </ProfileCardLabel>
            <ProfileCardTitle> {state.user!.last_name} </ProfileCardTitle>
          </ProfileCardRow>
        </ProfileCardColumn>
      </ProfileCardInner>
    </ProfileCard>
  );
};

export default ProfileCardContainer;

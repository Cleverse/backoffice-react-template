import React from "react";
import { LoginForm } from "../feature/login/LoginForm";
import { PrimaryButton } from "../feature/common/Button";
import { PageContainer } from "../feature/common/PageContainer";
export const LoginPage = () => {
  return (
    <PageContainer>
      <PrimaryButton>tests</PrimaryButton>
      <LoginForm />
    </PageContainer>
  );
};

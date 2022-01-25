import React from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { ProfileContent } from "./components/ProfileContent";
import "./styles/App.css"

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
 const MainContent = () => {    
  return (
      <div className="App">
          <AuthenticatedTemplate>
              <ProfileContent />
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
              <h5 className="card-title">Please sign-in to see your profile information.</h5>
          </UnauthenticatedTemplate>
      </div>
  );
};

export default function App() {
  return (
      <PageLayout>
          <MainContent />
      </PageLayout>
  );
}
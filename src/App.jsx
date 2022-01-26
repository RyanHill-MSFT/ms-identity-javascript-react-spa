import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { PageLayout } from "./components/PageLayout";
import { ProfileContent } from "./components/ProfileContent";
import "./styles/App.css";

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
            <h2><label>Client ID:&nbsp;</label>{process.env.REACT_APP_CLIENT_ID}</h2>
            <h4><label>Tenant:&nbsp;</label>{process.env.REACT_APP_TENANT}</h4>
            <h4><label>Redirect:&nbsp;</label>{process.env.REACT_APP_REDIRECT_URI}</h4>
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

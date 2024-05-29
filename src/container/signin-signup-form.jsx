import React, { useState } from "react";
import axios from "axios";
import * as Components from '../signComponents/Components'; // Adjust the path as necessary

const Sign = () => {
    const [signIn, toggle] = useState(true);

    const handleSignUp = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            nom: formData.get('name'),
            email: formData.get('email'),
            mot_de_passe: formData.get('password'),
            api_token: formData.get('api_token'),
            nom_de_domaine: formData.get('nom_de_domaine')
        };

        try {
            const response = await axios.post("http://localhost:8000/create-account", data);
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form onSubmit={handleSignUp}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' name='name' placeholder='Name' required />
                    <Components.Input type='email' name='email' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address." required />
                    <Components.Input type='password' name='password' placeholder='Password' required />
                    <Components.Input type='text' name='nom_de_domaine' placeholder='Id.atlassian.net'  pattern=".*\.atlassian\.net" title="Please enter a valid domain name." required />
                    <Components.Input type='password' name='api_token' placeholder='API token' required />
                    <Components.Button type="submit">Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Sign;

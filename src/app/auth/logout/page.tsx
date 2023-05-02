"use client";

// Using the signOut() method on a button in the client, as used in the example project, should avoid triggering this page:
// Refer this comment https://github.com/nextauthjs/next-auth/issues/808#issuecomment-718770394 to understand why this page is needed.

export interface SignoutProps {
    url: string
    csrfToken: string
}
export default async function Logout(props: SignoutProps) {
    const { url, csrfToken } = props;
    
    // Fixme: url is undefined
    // because of app directory??

    return (
        <div>
        <div className="card">
          <h1>Signout</h1>
          <p>Are you sure you want to sign out?</p>
          <form action={`${url}/signout`} method="POST">
            <input type="hidden" name="csrfToken" value={csrfToken} />
            <button id="submitButton" type="submit">Sign out</button>
          </form>
        </div>
      </div>
    )
}
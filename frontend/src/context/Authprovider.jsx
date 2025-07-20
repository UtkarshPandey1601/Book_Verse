import React from 'react'
export const AuthContext = React.createContext();
export default function Authprovider({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [auth, setAuth] = React.useState(user ? user : null);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return React.useContext(AuthContext);
}
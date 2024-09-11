import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import revalidate from "next/cache"

export async function loginUser(email : string, password : string) {
    const response = await fetch('https://localhost:7188/api/Users/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.token && !data.token.includes('Invalid')) {
        // Store the JWT token in a cookie
        Cookies.set('jwt', data.token, { expires: 7 }); // Expires in 7 days
        startTokenRefresh();
        return data;
    } else {
        throw new Error('Invalid login credentials');
    }
}

function startTokenRefresh() {
    setInterval(loginUser, 3600000)
}

export async function registerUser(email: string, password: string) {
    const response = await fetch('https://localhost:7188/api/Users/Register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return await response.json();

     
}

export function getJwtToken(): string | null {
    let cookie = Cookies.get('jwt') || '';
    if(cookie !== '') {
        return jwtDecode(cookie);
        } else {
            return null;
    }
}

    
export function getCustomerId(): string | null {
    let cookie = Cookies.get('jwt') || '';
    if(cookie !== '') {
        let customerId : string = jwtDecode(cookie).sub as string;
        return customerId
        } else {
            return null;
       }
    }

    export function getEmailFromJwt() : string | null {
        let cookie = Cookies.get('jwt') || '';
    if(cookie !== '') {
        let email : string = jwtDecode(cookie).email as string;
        return email
        } else {
            return null;
       }
    }

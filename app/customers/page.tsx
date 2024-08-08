// Example usage in your component

"use client";
import { useState, useEffect } from "react";
import {loginUser} from "@/app/hooks/auth";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { getJwtToken } from "@/app/hooks/auth";
import { get } from "http";


export default function MyStuff() {
  const [token, setToken] = useState<string | null>(null);


  useEffect(() => {
    const tokenValues = getJwtToken();
    console.log(tokenValues);

    if (tokenValues) {
      setToken(tokenValues);
      console.log('User is already logged in');
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts


async function login(formData: FormData) {



  const loginFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

console.log(loginFormData);
 const response = await loginUser(loginFormData.email, loginFormData.password);
console.log(response);
  console.log('User logged in');
  console.log(jwtDecode(response.token));
  redirect('/services');
  
}

  return(
    
    <div className="">
       <div className="bg-gray-900 h-28 rounded-lg">
                <div className="flex justify-center h-28 align-center">
                    <h1 className="text-white mt-9 text-4xl">Login</h1>
                </div>
            </div>
  {!token && 
  <form action={login}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="email">
          Email
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="text" />
        </label>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="password">
          Password
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name="password" type="password" />
        </label>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </div>
    </div>
  </form>
}
 {(token && <p>Welcome {token?.email}</p>)}
  </div>
)
}
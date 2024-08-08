"use client";
import { registerUser } from "../hooks/auth";
import { useState } from "react";
 function Register() {

    const [registerSuccess, setRegisterSuccess] = useState<any>(null);


    async function register(formData: FormData) {
        const registerFormData = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }
        console.log(registerFormData);
        const response = await registerUser(registerFormData.email, registerFormData.password);
        console.log(response);
        setRegisterSuccess(response);
    }
    return(
        <div>
            <div className="bg-gray-900 h-28 rounded-lg">
                <div className="flex justify-center h-28 align-center">
                    <h1 className="text-white mt-9 text-4xl">Register</h1>
                </div>
            </div>
            <div>
                <form className="w-full max-w-xlg bg-gray-200 p-10 rounded-lg" action={register}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="email">
                                Email
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" type="email" />
                            </label>
                            
                        </div>                    
                        <div className="w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="password">
                                Password
                                <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" name="password" type="password" />
                            </label>
                        </div>
                        <div className="flex flex-wrap -mx-3 items-center">
                            <div className="w-full px-3">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                {registerSuccess && <div className="text-green-500">Registration successful</div>}
            </div>
        </div>
      
    )
} export default Register;

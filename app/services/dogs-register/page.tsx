"use client";
import { useState } from "react";
import Image from "next/image";
import { PostDog } from "../../lib/definitions";
import { postDog } from "../../hooks/postDog";
import Cookie from "js-cookie";
export default function RegisterDog() {

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const changeIsSubmitted = () => { setIsSubmitted(!isSubmitted) }

    async function createDog(formData: FormData) {

        const addDogFormData : PostDog = {
        name: formData.get('dog-name') as string,
        breed: formData.get('dog-breed') as string,
        age: parseInt(formData.get('dog-age') as string) as number,
        notes: formData.get('dog-notes') as string
        }
        
    
        //console.log(addDogFormData);
        console.log('Dog added'); 
        const response = await postDog(addDogFormData, Cookie.get('jwt'));  
        console.log(response);
        changeIsSubmitted();    
    }
  
    return (
    
<div className="flex justify-center h-44">   
    { !isSubmitted &&
<form className="w-full max-w-lg" action={createDog}>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <div className="flex justify-center  rounded-none bg-gray-900 h-16">
            <h1 className="mt-5 text-xl text-white"> New Dog Register</h1>
            </div>
            <div className="flex justify-center">
            <Image src="/img/pawprints2.jpg" alt="pawprints" width="70" height="50" />
            </div>
        </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6 -mt-5">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-name">
        Name
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dog-name" name="dog-name" type="text" />
      </label>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-age">
        Age
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="dog-age" name="dog-age" type="number" placeholder="3" />
      </label>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-breed">
        Breed
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dog-breed" name="dog-breed" type="text" placeholder="Lab" />
      </label>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-notes">
        Notes
      <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dog-notes" name="dog-notes"></textarea>
      </label>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full px-3">
    <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
    </div>
    </div>
  </div>
</form>
} { isSubmitted &&
<div className="flex justify-center">
    Dog has been submitted!
    </div>}

   </div>
  );
}
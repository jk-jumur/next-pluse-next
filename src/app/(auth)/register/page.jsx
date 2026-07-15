'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";



const RegisterPage = () => {

     const {  register, handleSubmit, watch, formState: { errors }} = useForm();
     const handleRegisterFunc = async(data) => {
        console.log(data, "data");

         const {name,  email, photo, password} = data;

          const {data: res, error} = await authClient.signUp.email({
              name: name,
              email: email,
              password: password,
              image: photo,
              callbackURL: "/"
          });

          console.log(res, error);
     }

     console.log(watch("email"));
     console.log(watch("password"));
    return (
        <div className="container mx-auto min-h-[vh] flex justify-center items-center bg-slate-100">

            <div className="p-4 rounded-xl bg-white m-4">

                 <h2 className="font-bold text-3xl text-center mb-6">Register  Your Account</h2>

                 <hr className= "text-gray-200 m-2"/>

                 <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    

                    <label className="label">Name</label>
                <input    type="text" className="input" placeholder="Type here Name"
                {...register("name", { required: "Name field is required" })} />

                     {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                         <label className="label">Photo URL</label>
                  <input    type="text" className="input" placeholder="Type your photo url"
                {...register("photo", { required: "Photo URL field is required" })} />

                 {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                <label className="label">Email</label>
                <input    type="email" className="input" placeholder="Enter your email address"
                {...register("email", { required: "email field is required" })} />

                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <label className="label">Password</label>
              <input   type="password" className="input" placeholder="Enter your password" 
              {...register("password", { required: "password field is required" })}/>

              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

               <button className="btn btn-neutral mt-4">Register</button>
               </fieldset>
                 </form>
                
             </div>
            
         </div>
     );
 };

export default RegisterPage;


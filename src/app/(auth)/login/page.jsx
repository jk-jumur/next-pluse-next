'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";



const LoginPage = () => {

     const {  register, handleSubmit,  formState: { errors }} = useForm();
     const handleLoginFunc = async(data) => {
        console.log(data, "data");
          const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
       console.log(res, error);

            if (error) {
         alert(error.message);
       }
    

    if (res) {
      alert("Signin successful");
    }
     }
     
    
  
    return (
        <div className="container mx-auto min-h-[vh] flex justify-center items-center bg-slate-100">

            <div className="p-4 rounded-xl bg-white m-4">

                 <h2 className="font-bold text-3xl text-center mb-6">Login Your Account</h2>

                 <hr className= "text-gray-200 m-2"/>

                 <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    

                <label className="label">Email</label>
                <input    type="email" className="input" placeholder="Enter your email address"
                {...register("email", { required: "email field is required" })} />

                   {errors.email && <p className="text-red-500">{errors.email.message}</p>}

              <label className="label">Password</label>
              <input   type="password" className="input" placeholder="Enter your password" 
              {...register("password", { required: "password field is required" })}/>

              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

               <button className="btn btn-neutral mt-4">Login</button>
               </fieldset>
                 </form>
                 <p className="mt-4">Don't have an account <Link href="/register" className="text-blue-500">Register</Link></p>
             </div>
            
         </div>
     );
 };

export default LoginPage;


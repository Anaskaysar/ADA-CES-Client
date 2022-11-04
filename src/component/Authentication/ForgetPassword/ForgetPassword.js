// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// import { sendPasswordResetEmail } from "firebase/auth";

// import auth from "../../../firebase.init";


// export default function ForgetPassword() {
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const onSubmit = (data) => {
//         handlePasswordReset(data);
//     };

//     const handlePasswordReset = (data) => {
//         sendPasswordResetEmail(auth, data.email)
//             .then(() => {
//                 console.log(data.email);
//                 console.log('email sent')
//             })
//     }

//     return (
//         <div className='flex h-screen justify-center items-center bg-secondary'>
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body items-center">
//                     <h2 className="card-title">Password Reset</h2>
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="form-control w-full max-w-xs">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Your Email"
//                                 className="input input-bordered w-full"
//                                 {...register("email", {
//                                     required: {
//                                         value: true,
//                                         message: 'Email is Required'
//                                     },
//                                     pattern: {
//                                         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                         message: 'Provide a valid Email'
//                                     }
//                                 })}
//                             />
//                         </div>

//                         <br></br>
//                         <input onClick={handlePasswordReset} className='btn w-full max-w-xs text-white' type="submit" value="Reset Password" />
//                     </form>


//                     {/* <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Click here To Reset Your Password</button>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

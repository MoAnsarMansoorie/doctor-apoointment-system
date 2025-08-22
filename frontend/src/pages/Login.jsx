import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:win-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>Please {state === "Sign Up" ? "Create Account" : "Login"} to book appointment</p>

        {
          state === "Sign Up" &&
          <div className='w-full'>
            <p>Full Name</p>
            <input
              className='border border-zinc-300 w-full p-2 mt-1 rounded'
              type='text'
              placeholder='Enter your full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        }

        <div className='w-full'>
          <p>Full Name</p>
          <input
            className='border border-zinc-300 w-full p-2 mt-1 rounded'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='w-full'>
          <p>Full Name</p>
          <input
            className='border border-zinc-300 w-full p-2 mt-1 rounded'
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className='bg-primary text-white py-2 w-full rounded-md text-base'>{state === "Sign Up" ? "Create Account" : "Login"}</button>

        {
          state === "Sign Up"
          ? <p>Already have an account <span className='text-primary underline cursor-pointer' onClick={() => setState("Login")}>Login Here</span></p>
          : <p>Don't have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState("Sign Up")}>Sign Up</span></p>
        }
      </div>
    </form>
  );
}

export default Login;

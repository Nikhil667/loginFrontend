import React, { useState } from "react";
import validator from "validator";
import { Toaster, toast } from 'sonner'


export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUserStatus, setIsUserStatus] = useState(null);
  const [isPasswordStatus, setIsPasswordStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Password: ${formData.password}`);

    if (
      validator.isEmpty(formData.name) &&
      validator.isEmpty(formData.password)
    ) {
      toast.error('Fields cannot be empty');
      setIsUserStatus(false);
      setIsPasswordStatus(false)
      return;
    }

    if (validator.isEmpty(formData.name)) {
      setUserError("Field is Empty");
      return;
    }

    if (validator.isEmpty(formData.password)) {
      setPasswordError("Password field is Empty");
      return;
    }

    if (formData.name.length <= 20) {
      setIsUserStatus(true);
    }

    if (formData.name.length > 20) {
      setIsUserStatus(false);
      setUserError("Username length can not exceed 20 characters");
      return;
    }

    const passwordPattern =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

    if (!passwordPattern.test(formData.password)) {
      setIsPasswordStatus(false)
      setPasswordError(
        "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
      );
      return;
    }

    else {
      setUserError("");
      setPasswordError("");
      setIsPasswordStatus(true)
      setIsUserStatus(true);
      console.log(formData.name, formData.password);
    }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="h-full flex flex-col items-center gap-6">
        <h2 className="text-3xl text-[#666666] font-bold">Hello, Student!</h2>

        <div className="google-wrapper w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4 justify-center items-center">
            <p className="text-xs text-[#666666]">Log in with Social Media</p>
            <img className="self-center" src="./googleButton.png" />
          </div>
          <div className="line-container flex items-center gap-4">
            <div className="h-0.5 w-full bg-[#D9D9D9] "></div>
            <p>or</p>
            <div className="h-0.5 w-full bg-[#D9D9D9] "></div>
          </div>
        </div>

        <div className="form-wrapper w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="name"
              >
                Username
              </label>
              <input
                className={" ps-4 text-sm text-[#666666] placeholder:italic placeholder:text-[#868686] placeholder:text-xs " 
                 + (isUserStatus === null ? "border-gray-200" : isUserStatus === true ? "border-green-500" : "border-red-500")}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type your registered username here"
              />
              <p className="text-sm text-red-500 italic">{userError}</p>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className=" text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="password"
              >
                Password
              </label>
              <input
               className={" ps-4 text-sm text-[#666666] placeholder:italic placeholder:text-[#868686] placeholder:text-xs " 
               + (isPasswordStatus === null ? "border-gray-200" : isPasswordStatus === true ? "border-green-500" : "border-red-500")}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type your password here"
              />
              <p className="text-sm text-red-500 italic">{passwordError}</p>
            </div>

            <button className="bg-[#5788B8] text-sm font-medium" type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="forgot-links-wrapper text-[#5788B8] text-[12px] italic font-normal underline flex space-x-16">
          <a href="/">Forget Username</a>
          <a href="/">Forget Password</a>
        </div>

        <div className="signup-redirect">
          <span>Don&apos;t have an account? </span>
          <a
            href="/multisignup"
            className=" text-[#5788B8] text-sm italic font-semibold underline"
          >
            Sign Up Here
          </a>
        </div>
      </div>
    </>
  );
}

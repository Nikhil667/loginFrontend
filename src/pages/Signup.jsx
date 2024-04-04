import React, { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    studentID: "",
    schoolID: "",
    yearOfPassing: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`studentID: ${formData.studentID}, schoolID: ${formData.schoolID}, yearOfPassing: ${formData.yearOfPassing}`);
  };

  return (
    <>
      <div className="h-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl text-[#666666] font-bold">Student Sign Up</h2>
        <p className="text-xs text-black">1. Add Personal Details</p>
        </div>

        <div className="form-wrapper w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="studentID">
                Student ID
              </label>
              <input
                className="ps-4 text-sm text-[#666666] 
                placeholder:italic placeholder:text-[#868686] 
                placeholder:text-xs
                "
                type="text"
                id="studentID"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                placeholder="Type your student ID here"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="schoolID">
                School ID
              </label>
              <input
                className="text-sm text-[#666666] 
                placeholder:italic placeholder:text-[#868686] ps-4
                placeholder:text-xs
                "
                type="text"
                id="schoolID"
                name="schoolID"
                value={formData.schoolID}
                onChange={handleChange}
                placeholder="Type your school ID here"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="yearOfPassing"
              >
                Year of Passing 10th standard
              </label>
              <input
                className="text-sm text-[#666666]
                placeholder:italic placeholder:text-[#868686] ps-4
                placeholder:text-xs
                "
                type="number"
                id="yearOfPassing"
                name="yearOfPassing"
                value={formData.yearOfPassing}
                onChange={handleChange}
                placeholder="Type the year you passed 10th standard"
              />
            </div>

            <button className=" bg-[#5788B8] text-sm font-medium" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

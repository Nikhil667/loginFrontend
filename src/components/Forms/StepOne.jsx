import React from 'react'
import validator from 'validator';

export default function StepOne({ nextStep, handleFormData, values }) {

    //console.log(values.studentID)

    const handleSubmit = (e) => {
        e.preventDefault();
        if( validator.isEmpty(values.studentID) || validator.isEmpty(values.schoolID) || validator.isEmpty(values.yearOfPassing)){
            alert("Field Empty")
        } else{
            nextStep();
        }
    }

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
                type="number"
                id="studentID"
                name="studentID"
                defaultValue={values.studentID}
                onChange={handleFormData("studentID")}
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
                type="number"
                id="schoolID"
                name="schoolID"
                defaultValue={values.schoolID}
                onChange={handleFormData("schoolID")}
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
                defaultValue={values.yearOfPassing}
                onChange={handleFormData("yearOfPassing")}
                placeholder="Type the year you passed 10th standard"
              />
            </div>

            <button className="w-1/3 ml-auto bg-[#5788B8] text-sm font-medium" type="submit">
              Next &gt;
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

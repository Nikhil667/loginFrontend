import React from 'react'
import validator from 'validator';

export default function StepTwo({ nextStep, prevStep, handleFormData, values }) {

    //console.log(values.studentID)

    const handleSubmit = (e) => {
        e.preventDefault();
        if( validator.isEmpty(values.name) || validator.isEmpty(values.password) || validator.isEmpty(values.confirmPassword)){
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
        <p className="text-xs text-black">2. Add Account Details</p>
        </div>

        <div className="form-wrapper w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">
                Username
              </label>
              <input
                className="ps-4 text-sm text-[#666666] 
                placeholder:italic placeholder:text-[#868686] 
                placeholder:text-xs
                "
                type="text"
                id="name"
                name="name"
                defaultValue={values.name}
                onChange={handleFormData("name")}
                placeholder="Type your username here"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="password">
                Password
              </label>
              <input
                className="text-sm text-[#666666] 
                placeholder:italic placeholder:text-[#868686] ps-4
                placeholder:text-xs
                "
                type="text"
                id="password"
                name="password"
                defaultValue={values.password}
                onChange={handleFormData("password")}
                placeholder="Type your password here"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#666666] after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="text-sm text-[#666666] 
                placeholder:italic placeholder:text-[#868686] ps-4
                placeholder:text-xs
                "
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                defaultValue={values.confirmPassword}
                onChange={handleFormData("confirmPassword")}
                placeholder="Re-type your password here"
              />
            </div>

            <div className='flex place-content-around'>
            <button onClick={prevStep} className="w-1/3 bg-[#5788B8] text-sm font-medium">
              {"<"} Prev 
            </button>
            <button className="w-1/3 ml-auto bg-[#5788B8] text-sm font-medium" type="submit">
              Next {">"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

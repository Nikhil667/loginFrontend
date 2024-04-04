import React from 'react'
import { Link } from 'react-router-dom';

export default function VerifyDetails({values, prevStep, submit}) {

    const { schoolID, studentId, name, password, confirmPassword } = values;

  return (
    <div className="details-container flex flex-col gap-4">
      <p className='font-bold'>Verify details before submitting the form:</p>
      <div className='flex flex-col gap-2 p-4 border-2'>
      <p><strong>School ID: </strong>{values.schoolID}</p>
      <p><strong>Student ID: </strong>{values.studentID}</p>
      <p><strong>Username: </strong>{values.name}</p>
      <p><strong>Password: </strong>{values.password}</p>
      </div>

      <div className='flex place-content-between'>
            <button onClick={prevStep} className="w-1/3 bg-[#5788B8] text-sm font-medium">
              {"<"} Back 
            </button>
            <button className="w-1/3 ml-auto bg-green-500 text-sm font-medium" onClick={submit} type="submit">
              Submit
            </button>
          </div>
    </div>
  )
}

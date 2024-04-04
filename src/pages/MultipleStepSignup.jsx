import React, {useState} from "react";
import StepOne from "../components/Forms/StepOne";
import StepTwo from "../components/Forms/StepTwo";
import VerifyDetails from "../components/Forms/VerifyDetails";
import { useNavigate } from "react-router-dom";

export default function MultipleStepSignup() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate()


    //state for form data
    const [formData, setFormData] = useState({
        studentID: "",
        schoolID: "",
        yearOfPassing: "",
        name: "",
        password: "",
        confirmPassword: ""
    });

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
      };
    
      // function for going to previous step by decreasing step state by 1
      const prevStep = () => {
        setStep(step - 1);
      };

      const handleChange = (name) => (event) => {
        const {value}  = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("multi");
        navigate("/login");
      };

      switch(step){
        case 1: return(
            <StepOne values={formData} nextStep={nextStep} handleFormData={handleChange}/>
        );
        case 2: return(
            <StepTwo values={formData} nextStep={nextStep} handleFormData={handleChange} prevStep={prevStep}/>
        );
        case 3: return(
            <VerifyDetails values={formData} prevStep={prevStep} submit={handleSubmit}/>
        );
        default: return (
            <div>Sign Up Error</div>
        );
      }
    
}

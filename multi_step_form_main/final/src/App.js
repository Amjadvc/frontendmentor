import { useState } from "react";
import Aside from "./components/Aside";
import Form from "./components/Form";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="app">
      <div className="container">
        <div className="form-container">
          <Aside currentStep={currentStep} />
          <Form currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>
    </div>
  );
}

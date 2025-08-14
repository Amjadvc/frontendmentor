export function StepController({
  variant,
  currentStep,
  setCurrentStep,
  handleNextStep,
  handleSubmit,
}) {
  return (
    <div
      className={`step-controler ${variant} ${currentStep === 1 ? "end" : ""}`}
    >
      {currentStep > 1 && (
        <button
          className="btn back"
          type="button"
          onClick={() => setCurrentStep((p) => (p > 1 ? p - 1 : p))}
        >
          Go Back
        </button>
      )}
      {currentStep <= 3 && (
        <button className="btn next" type="button" onClick={handleNextStep}>
          Next Step
        </button>
      )}
      {currentStep >= 4 && (
        <button className="btn confirm" type="button" onClick={handleSubmit}>
          Confirm
        </button>
      )}
    </div>
  );
}

const asideDate = [
  { stepNum: 1, stepTitle: "Your info" },
  { stepNum: 2, stepTitle: "Select plan" },
  { stepNum: 3, stepTitle: "Add-ons" },
  { stepNum: 4, stepTitle: "Summary" },
];

function Aside({ currentStep }) {
  return (
    <aside className="steps-controler">
      {asideDate.map((stepC) => (
        <StepCount
          stepNum={stepC.stepNum}
          stepTitle={stepC.stepTitle}
          key={stepC.stepNum}
          currentStep={currentStep}
        />
      ))}
    </aside>
  );
}

function StepCount({ stepNum, stepTitle, currentStep }) {
  return (
    <div
      className={`steps-controler-holder ${
        stepNum === Math.min(currentStep, 4) ? "active" : ""
      }`}
    >
      <div className="steps-controler-num">
        <span className="num">{stepNum}</span>
      </div>
      <div className="steps-controler-title">
        <span className="step-name">Step {stepNum}</span>
        <p className="step-info">{stepTitle}</p>
      </div>
    </div>
  );
}

export default Aside;

import { StepHeader } from ".././StepHeader";

export function Step4({
  paymentsPlan,
  adsOptions,
  paymentPeriod,
  setCurrentStep,
  calculateTotal,
}) {
  const { selectedPlan, adsOptionsSelected, total } = calculateTotal(
    paymentsPlan,
    adsOptions,
    paymentPeriod
  );
  const {
    paymentMethode,
    payment: { paymentM, paymentY },
  } = selectedPlan;
  const monthlyPayment = paymentPeriod === "monthly";

  return (
    <div className="step step4">
      <StepHeader
        title="Finishing up"
        info="Double-check everything looks OK before confirming."
      />

      <div className="check-holder">
        <div className="check-plan">
          <div className="check-plan-info">
            <p>
              {paymentMethode} ({monthlyPayment ? "Monthly" : "Yearly"})
            </p>
            <button
              className="btn"
              type="button"
              onClick={() => setCurrentStep(2)}
            >
              Change
            </button>
          </div>
          <span className="check-plan-state">
            {monthlyPayment ? `$${paymentM}/mo` : `$${paymentY}/yr`}
          </span>
        </div>
        <div className="check-selected">
          {adsOptionsSelected.map((opt) => (
            <Selected key={opt.id} opt={opt} monthlyPayment={monthlyPayment} />
          ))}
        </div>
      </div>

      <div className="totle-holder">
        <p>Total (per {monthlyPayment ? "month" : "year"})</p>
        <strong className="total-num">
          {monthlyPayment ? `+$${total}/mo` : `+$${total}/yr`}
        </strong>
      </div>
    </div>
  );
}

function Selected({ opt, monthlyPayment }) {
  const {
    pay: { payM, payY },
  } = opt;
  return (
    <div className="selected">
      <p className="selected-option">{opt.title}</p>
      <span className="selected-state">
        {monthlyPayment ? `+$${payM}/mo` : `+$${payY}/yr`}
      </span>
    </div>
  );
}

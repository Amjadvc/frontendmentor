import { StepHeader } from ".././StepHeader";

export function Step2({
  paymentPeriod,
  setPaymentPeriod,
  paymentsPlan,
  handlePickPlan,
}) {
  return (
    <div className="step step2">
      <StepHeader
        title="Select your plan"
        info="You have the option of monthly or yearly billing."
      />
      <fieldset className="step-content">
        {paymentsPlan.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            paymentPeriod={paymentPeriod}
            handlePickPlan={handlePickPlan}
          />
        ))}
      </fieldset>
      <fieldset className="plan-controler">
        <span className={`plan ${paymentPeriod === "monthly" ? "active" : ""}`}>
          Monthly
        </span>
        <label htmlFor="planToggle" className="switch">
          <input
            id="planToggle"
            type="checkbox"
            checked={paymentPeriod === "yearly"}
            onChange={() =>
              setPaymentPeriod(
                paymentPeriod === "monthly" ? "yearly" : "monthly"
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <span className={`plan ${paymentPeriod === "yearly" ? "active" : ""}`}>
          Yearly
        </span>
      </fieldset>
    </div>
  );
}

function PlanCard({ plan, paymentPeriod, handlePickPlan }) {
  return (
    <div className={`plan-card ${plan.picked ? "active" : ""}`}>
      <input
        id={plan.id}
        type="radio"
        name="selected-plan"
        value={plan.paymentMethode}
        onChange={() => handlePickPlan(plan)}
        className="hidden"
      />
      <label htmlFor={plan.id} className="plan-card-inner">
        <figure className="plan-img-holder">
          <img src={plan.icon} alt={plan.paymentMethode} />
        </figure>
        <article className="plan-content">
          <h3 className="plan-title">{plan.paymentMethode}</h3>
          <p className="plan-pay">{`${
            paymentPeriod === "monthly"
              ? `$${plan.payment.paymentM}/mo`
              : `$${plan.payment.paymentY}/yr`
          }`}</p>
          {paymentPeriod === "yearly" && (
            <span className="months-free">2 months free</span>
          )}
        </article>
      </label>
    </div>
  );
}

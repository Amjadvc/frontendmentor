import adsIcon from "../../assets/images/icon-checkmark.svg";
import { StepHeader } from ".././StepHeader";

export function Step3({ adsOptions, paymentPeriod, handelPickItem }) {
  return (
    <div className="step step3">
      <StepHeader
        title="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />
      <fieldset className="step-content">
        {adsOptions.map((item) => (
          <Option
            key={item.id}
            item={item}
            paymentPeriod={paymentPeriod}
            handelPickItem={handelPickItem}
          />
        ))}
      </fieldset>
    </div>
  );
}

function Option({ item, paymentPeriod, handelPickItem }) {
  return (
    <label className={`ads-option ${item.picked ? "active" : ""}`}>
      <input
        type="checkbox"
        name="ads"
        value={item.picked}
        className="hidden"
        onChange={() => handelPickItem(item)}
      />
      <div className="ads-content">
        <figure className="ads-icon">
          <img src={adsIcon} alt="ads" />
        </figure>
        <div className="ads-text">
          <p className="ads-title">{item.title}</p>
          <p className="ads-description">{item.description}</p>
        </div>
      </div>
      <div className="ads-pay">
        <span>
          {paymentPeriod === "monthly"
            ? `+$${item.pay.payM}/mo`
            : `+$${item.pay.payY}/yr`}
        </span>
      </div>
    </label>
  );
}

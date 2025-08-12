import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";
import adsIcon from "./assets/images/icon-checkmark.svg";
import thanksIcom from "./assets/images/icon-thank-you.svg";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="form-container">
          <aside className="steps-controler">
            <StepCount stepNum={1} stepTitle={"Your info"} />
            <StepCount stepNum={2} stepTitle={"Select plan"} />
            <StepCount stepNum={3} stepTitle={"Add-ons"} />
            <StepCount stepNum={4} stepTitle={"Summary"} />
          </aside>
          <div className="steps-content">
            <form className="form-holder">
              {/* Step 1 */}
              <div className="step step1 hidden ">
                <StepHeader
                  title="Personal info"
                  info="Please provide your name, email address, and phone number."
                />
                <div className="step-content">
                  {/* error-show */}
                  <div className="inp-holder   ">
                    <label htmlFor="nameInp">Name</label>
                    <span className="inp-err">This field is required</span>
                    <input
                      id="nameInp"
                      type="text"
                      name="full-name"
                      placeholder="e.g. Stephen King"
                      autoComplete="off"
                    />
                  </div>

                  <div className="inp-holder   ">
                    <label htmlFor="emailInp">Email Address</label>
                    <span className="inp-err">This field is required</span>
                    <input
                      id="emailInp"
                      type="text"
                      name="email"
                      placeholder="e.g. stephenking@lorem.com"
                      autoComplete="off"
                    />
                  </div>

                  <div className="inp-holder   ">
                    <label htmlFor="phoneInp">Phone Number</label>
                    <span className="inp-err">This field is required</span>
                    <input
                      id="phoneInp"
                      type="text"
                      name="phone"
                      placeholder="e.g. +1 234 567 890"
                      inputMode="numeric"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step step2 hidden">
                <StepHeader
                  title="Select your plan"
                  info="You have the option of monthly or yearly billing."
                />
                <fieldset className="step-content">
                  <div className="plan-card">
                    <input
                      id="planCardArcade"
                      type="radio"
                      name="selected-plan"
                      className="hidden"
                    />
                    <label htmlFor="planCardArcade" className="plan-card-inner">
                      <figure className="plan-img-holder">
                        <img src={arcadeIcon} alt="arcade" />
                      </figure>
                      <article className="plan-content">
                        <h3 className="plan-title">Arcade</h3>
                        <p className="plan-pay">$9/mo</p>
                        <span className="months-free">2 months free</span>
                      </article>
                    </label>
                  </div>

                  <div className="plan-card">
                    <input
                      id="planCardAdvanced"
                      type="radio"
                      name="selected-plan"
                      className="hidden"
                    />
                    <label
                      htmlFor="planCardAdvanced"
                      className="plan-card-inner"
                    >
                      <figure className="plan-img-holder">
                        <img src={advancedIcon} alt="{advanced" />
                      </figure>
                      <article className="plan-content">
                        <h3 className="plan-title">Advanced</h3>
                        <p className="plan-pay">$12/mo</p>
                        <span className="months-free">2 months free</span>
                      </article>
                    </label>
                  </div>

                  <div className="plan-card">
                    <input
                      id="planCardPro"
                      type="radio"
                      name="selected-plan"
                      className="hidden"
                    />
                    <label htmlFor="planCardPro" className="plan-card-inner">
                      <figure className="plan-img-holder">
                        <img src={proIcon} alt="arcade" />
                      </figure>
                      <article className="plan-content">
                        <h3 className="plan-title">Pro</h3>
                        <p className="plan-pay">$15/mo</p>
                        <span className="months-free">2 months free</span>
                      </article>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="plan-controler">
                  <span className="plan">Monthly</span>
                  <label htmlFor="planToggle" className="switch">
                    <input id="planToggle" type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span className="plan active">Yearly</span>
                </fieldset>
              </div>

              {/* Step 3 */}
              <div className="step step3  hidden ">
                <StepHeader
                  title="Pick add-ons"
                  info="Add-ons help enhance your gaming experience."
                />
                <fieldset className="step-content">
                  <label className="ads-option active">
                    <input
                      type="checkbox"
                      name="ads"
                      value={"Online_service"}
                      className="hidden"
                    />
                    <div className="ads-content">
                      <figure className="ads-icon">
                        <img src={adsIcon} alt="ads" />
                      </figure>
                      <div className="ads-text">
                        <p className="ads-title">Online service</p>
                        <p className="ads-description">
                          Access to multiplayer games
                        </p>
                      </div>
                    </div>
                    <div className="ads-pay">
                      <span>+$1/mo</span>
                    </div>
                  </label>

                  <label className="ads-option active">
                    <input
                      type="checkbox"
                      name="ads"
                      value={"Larger_storage"}
                      className="hidden"
                    />
                    <div className="ads-content">
                      <figure className="ads-icon">
                        <img src={adsIcon} alt="ads" />
                      </figure>
                      <div className="ads-text">
                        <p className="ads-title">Larger storage</p>
                        <p className="ads-description">
                          Extra 1TB of cloud save
                        </p>
                      </div>
                    </div>
                    <div className="ads-pay">
                      <span>+$2/mo</span>
                    </div>
                  </label>

                  <label className="ads-option ">
                    <input
                      type="checkbox"
                      name="ads"
                      value={"Customizable_Profile"}
                      className="hidden"
                    />
                    <div className="ads-content">
                      <figure className="ads-icon">
                        <img src={adsIcon} alt="ads" />
                      </figure>
                      <div className="ads-text">
                        <p className="ads-title">Customizable Profile</p>
                        <p className="ads-description">
                          Custom theme on your profile
                        </p>
                      </div>
                    </div>
                    <div className="ads-pay">
                      <span>+$2/mo</span>
                    </div>
                  </label>
                </fieldset>
              </div>

              {/* Step 4 */}
              <div className="step step4 hidden  ">
                <StepHeader
                  title="Finishing up"
                  info="Double-check everything looks OK before confirming."
                />

                <div className="check-holder">
                  <div className="check-plan">
                    <div className="check-plan-info">
                      <p>Arcade (Monthly)</p>
                      <button className="btn">Change</button>
                    </div>
                    <span className="check-plan-state">$9/mo</span>
                  </div>
                  <div className="check-selected">
                    <div className="selected">
                      <p className="selected-option">Online service</p>
                      <span className="selected-state">+$1/mo</span>
                    </div>

                    <div className="selected">
                      <p className="selected-option">Larger storage</p>
                      <span className="selected-state">+$2/mo</span>
                    </div>

                    {/* <div className="selected">
                      <p className="selected-option">Larger storage</p>
                      <span className="selected-state">+$2/mo</span>
                    </div> */}
                  </div>
                </div>

                <div className="totle-holder">
                  <p>Total (per month)</p>
                  <strong className="total-num">+$12/mo</strong>
                </div>
              </div>

              {/* Step 5*/}
              <div className="step step5">
                <div className="thanks-holder">
                  <figure className="thank-icon">
                    <img src={thanksIcom} alt="true" />
                  </figure>
                  <h2 className="thank-title">Thank you!</h2>
                  <p className="thank-text">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                  </p>
                </div>
              </div>

              {/* <StepController variant="desck" /> */}
            </form>
          </div>
        </div>
        <StepController variant="mob" />
      </div>
    </div>
  );
}

function StepCount({ stepNum, stepTitle }) {
  return (
    <div className="steps-controler-holder">
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

function StepController({ variant }) {
  return (
    <div className={`step-controler ${variant}`}>
      <button className="btn back" type="button">
        Go Back
      </button>
      <button className="btn next" type="button">
        Next Step
      </button>
    </div>
  );
}

function StepHeader({ title, info }) {
  return (
    <div className="step-header">
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}

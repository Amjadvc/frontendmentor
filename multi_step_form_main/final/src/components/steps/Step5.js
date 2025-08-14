import thanksIcom from "../../assets/images/icon-thank-you.svg";

export function Step5() {
  return (
    <div className="step step5">
      <div className="thanks-holder">
        <figure className="thank-icon">
          <img src={thanksIcom} alt="true" />
        </figure>
        <h2 className="thank-title">Thank you!</h2>
        <p className="thank-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

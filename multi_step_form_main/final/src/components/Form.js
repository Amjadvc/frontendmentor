import { useEffect, useState } from "react";
import { StepController } from "./StepController";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const initialPayments = [
  {
    id: "pyArcade",
    paymentMethode: "Arcade",
    payment: { paymentM: 9, paymentY: 90 },
    icon: ArcadeIcon,
    picked: true,
  },
  {
    id: "pyAdvanced",
    paymentMethode: "Advanced",
    payment: { paymentM: 12, paymentY: 120 },
    icon: AdvancedIcon,
    picked: false,
  },
  {
    id: "pyPro",
    paymentMethode: "Pro",
    payment: { paymentM: 15, paymentY: 150 },
    icon: ProIcon,
    picked: false,
  },
];

const initialItemsAddOns = [
  {
    id: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    picked: true,
    pay: { payM: 1, payY: 10 },
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    picked: true,
    pay: { payM: 2, payY: 20 },
  },
  {
    id: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    picked: false,
    pay: { payM: 2, payY: 20 },
  },
];

function Form({ currentStep, setCurrentStep }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
  });
  const [paymentPeriod, setPaymentPeriod] = useState("monthly");
  const [paymentsPlan, setPaymentsPlan] = useState(initialPayments);
  const [adsOptions, setAdsOptions] = useState(initialItemsAddOns);

  const [activeStep, setActiveStep] = useState(false);
  const [renderStep, setRenderStep] = useState(currentStep);

  useEffect(() => {
    setActiveStep(false);
    const timer = setTimeout(() => {
      setRenderStep(currentStep);
      setActiveStep(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [currentStep]);

  function handlePickPlan(item) {
    const updatedArray = paymentsPlan.map((plan) =>
      plan.id === item.id
        ? { ...plan, picked: true }
        : { ...plan, picked: false }
    );
    setPaymentsPlan(updatedArray);
  }

  function handelPickItem(item) {
    const updatedArray = adsOptions.map((adsOption) =>
      adsOption.id === item.id
        ? { ...item, picked: !adsOption.picked }
        : adsOption
    );
    setAdsOptions(updatedArray);
  }

  function validateStep1() {
    let newErrors = { fullName: false, email: false, phone: false };
    let isValid = true;

    //Name
    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = true;
      isValid = false;
    }

    //Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = true;
      isValid = false;
    }

    //phone
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 11 || !digits.startsWith("1")) {
      newErrors.phone = true;
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  function handleNextStep() {
    let isValid = false;
    switch (currentStep) {
      case 1:
        isValid = validateStep1();
        break;
      default:
        isValid = true;
    }

    if (isValid) {
      setCurrentStep((p) => (p < 5 ? p + 1 : p));
    }
  }

  function calculateTotal(paymentsPlan, adsOptions, paymentPeriod) {
    const monthlyPayment = paymentPeriod === "monthly";
    const selectedPlan = paymentsPlan.find((item) => item.picked);
    const adsOptionsSelected = adsOptions.filter((item) => item.picked);

    const totalAds = adsOptionsSelected.reduce(
      (acc, cur) => acc + (monthlyPayment ? cur.pay.payM : cur.pay.payY),
      0
    );

    const total =
      totalAds +
      (monthlyPayment
        ? selectedPlan.payment.paymentM
        : selectedPlan.payment.paymentY);

    return {
      selectedPlan,
      adsOptionsSelected,
      total,
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { selectedPlan, adsOptionsSelected, total } = calculateTotal(
      paymentsPlan,
      adsOptions,
      paymentPeriod
    );

    const collectedData = {
      fullName,
      email,
      phone,
      paymentPeriod,
      adsOptionsSelected: adsOptionsSelected.map((ele) => ele.title).join(","),
      paymentMethode: selectedPlan.paymentMethode,
      total,
    };

    const queryString = new URLSearchParams(collectedData).toString();

    window.history.replaceState(null, "", `?${queryString}`);

    console.log(collectedData);
    handleNextStep();
  }

  return (
    <>
      <div className="steps-content">
        <form className={`form-holder ${activeStep ? "active" : ""}`}>
          {renderStep === 1 && (
            <Step1
              fullName={fullName}
              setFullName={setFullName}
              setEmail={setEmail}
              setPhone={setPhone}
              email={email}
              phone={phone}
              errors={errors}
              currentStep={currentStep}
            />
          )}
          {renderStep === 2 && (
            <Step2
              paymentPeriod={paymentPeriod}
              setPaymentPeriod={setPaymentPeriod}
              paymentsPlan={paymentsPlan}
              handlePickPlan={handlePickPlan}
              currentStep={currentStep}
            />
          )}
          {renderStep === 3 && (
            <Step3
              adsOptions={adsOptions}
              paymentPeriod={paymentPeriod}
              handelPickItem={handelPickItem}
            />
          )}
          {renderStep === 4 && (
            <Step4
              paymentPeriod={paymentPeriod}
              paymentsPlan={paymentsPlan}
              adsOptions={adsOptions}
              setCurrentStep={setCurrentStep}
              calculateTotal={calculateTotal}
            />
          )}
          {renderStep === 5 && <Step5 />}

          {currentStep < 5 && (
            <StepController
              variant="desck"
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              handleNextStep={handleNextStep}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
      {currentStep < 5 && (
        <StepController
          variant="mob"
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          handleNextStep={handleNextStep}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Form;

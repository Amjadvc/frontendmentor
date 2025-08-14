import { StepHeader } from "../StepHeader";

export function Step1({
  fullName,
  setFullName,
  setEmail,
  setPhone,
  email,
  phone,
  errors,
}) {
  function handleName(e) {
    setFullName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    let digits = e.target.value.replace(/\D/g, "");

    if (!digits.startsWith("1")) {
      digits = "1" + digits;
    }
    digits = digits.slice(0, 11);

    const mainDigits = digits.slice(1);
    let formatted = "+1";

    if (mainDigits.length > 0) {
      formatted += " " + mainDigits.slice(0, 3);
    }
    if (mainDigits.length > 3) {
      formatted += " " + mainDigits.slice(3, 6);
    }
    if (mainDigits.length > 6) {
      formatted += " " + mainDigits.slice(6, 10);
    }

    setPhone(formatted);
  }

  return (
    <div className="step step1">
      <StepHeader
        title="Personal info"
        info="Please provide your name, email address, and phone number."
      />
      <div className="step-content">
        <InputHolder
          id={"nameInp"}
          inpName={"fullName"}
          inpValue={fullName}
          handleFunction={handleName}
          errors={errors}
          placeholder={"e.g. Stephen King"}
          inputMode={"text"}
          labelContent={"Name"}
        />

        <InputHolder
          id={"emailInp"}
          inpName={"email"}
          inpValue={email}
          handleFunction={handleEmail}
          errors={errors}
          placeholder={"e.g. stephenking@lorem.com"}
          inputMode={"text"}
          labelContent={"Email Address"}
        />

        <InputHolder
          id={"phoneInp"}
          inpName={"phone"}
          inpValue={phone}
          handleFunction={handlePhone}
          placeholder={"e.g. +1 234 567 890"}
          inputMode={"numeric"}
          errors={errors}
          labelContent={"Phone Number"}
        />
      </div>
    </div>
  );
}

function InputHolder({
  labelContent,
  errors,
  handleFunction,
  id,
  inpValue,
  inpName,
  placeholder,
  inputMode,
}) {
  return (
    <div className={`inp-holder ${errors[inpName] ? "error-show" : ""}`}>
      <label htmlFor={id}>{labelContent}</label>
      <span className="inp-err">This field is required</span>
      <input
        id={id}
        type="text"
        name={inpName}
        value={inpValue}
        onChange={handleFunction}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete="off"
      />
    </div>
  );
}

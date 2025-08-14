export function StepHeader({ title, info }) {
  return (
    <div className="step-header">
      <h1>{title}</h1>
      <p>{info}</p>
    </div>
  );
}

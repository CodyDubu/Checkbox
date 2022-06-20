import "./styles.css";

export default function Check({ vall, isChecked }) {
  return (
    <div className="check-wrap">
      <input type="checkbox" value={vall} onChange={isChecked} />
      {vall}
    </div>
  );
}

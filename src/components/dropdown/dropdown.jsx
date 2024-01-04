import "./dropdown.css";




const Dropdown = (props) => {
    const {options} = props;
    return (
        <div className="dropdown">
            <span className="dropdown-icon">🌐</span>
            <select>
{
Array.isArray(options) && options.map((opt,ind)=> (
    <option key={ind} value={opt.value}>
      {opt.label}
    </option>
  ))
}
            </select>
        </div>
    )
}
export default Dropdown;
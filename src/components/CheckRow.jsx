function CheckRow({ type = 'checkbox', label, ...rest }) {
  return (
    <label className="eg-check-row">
      <input type={type} {...rest} /> {label}
    </label>
  )
}

export default CheckRow

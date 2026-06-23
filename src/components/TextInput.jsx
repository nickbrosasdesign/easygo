function TextInput({ label, id, ...rest }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="eg-input-wrap">
      {label && (
        <label className="eg-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input className="eg-input" id={inputId} type="text" {...rest} />
    </div>
  )
}

export default TextInput

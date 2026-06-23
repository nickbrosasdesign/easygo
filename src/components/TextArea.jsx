function TextArea({ label, id, ...rest }) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="eg-input-wrap">
      {label && (
        <label className="eg-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <textarea className="eg-textarea" id={inputId} {...rest} />
    </div>
  )
}

export default TextArea

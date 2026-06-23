function Logo({ size = 'full' }) {
  if (size === 'alt') {
    return <img src={`${import.meta.env.BASE_URL}alt-logo.png`} alt="EasyGo alt logo" className="eg-logo-alt" />
  }
  return <img src={`${import.meta.env.BASE_URL}logo-800-vector.png`} alt="EasyGo full logo" className="eg-logo-full" />
}

export default Logo

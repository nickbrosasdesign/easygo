function Logo({ size = 'full' }) {
  if (size === 'alt') {
    return <img src="/alt-logo.png" alt="EasyGo alt logo" className="eg-logo-alt" />
  }
  return <img src="/logo-800-vector.png" alt="EasyGo full logo" className="eg-logo-full" />
}

export default Logo

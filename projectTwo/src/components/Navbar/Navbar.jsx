import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
        <img src="https://plus.unsplash.com/premium_photo-1669590487094-c01dfc2ee939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

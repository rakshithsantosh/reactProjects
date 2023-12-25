import Search from './Search'
import './css/header.css'

function Header() {
  return (
    <>
      <div className="wrapper">
        <div className="image">
            <img src="https://www.boat-lifestyle.com/cdn/shop/files/christmas-logo_small.png?v=1703230694" alt="" />
        </div>
        <nav className="navlinks">
            <div>Categories</div>
            <div>Truly Yours</div>
            <div>Gift with boat</div>
            <div>Corporate orders</div>
            <div>More</div>
        </nav>
        <div className="links">
            <Search/>
            
        </div>
      </div>
    </>
  )
}

export default Header

import { Link } from "react-router-dom"
import YumBazaar from "../../assets/images/YumBazaar.png"
import Button from '@mui/material/Button';
import CountryDropdown from "../CountryDropdown";
import SearchBox from "./SearchBox";
import UserAndCartBox from "./UserAndCartBox";
import Navigation from "./Navigation";


const Header = () => {
  return (
    <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">We are happy to deliver you the <b>High quality</b> products</p>
                </div>
            </div>

            <header className="header">
              <div className="container">
                <div className="row">
                  <div className="logoWrapper d-flex align-items-center col-sm-2">
                    <Link to={'/'}><img src={YumBazaar} alt="logo"/></Link>
                  </div>
                  <div className="col-sm-10 d-flex align-items-center part2">
                    <CountryDropdown />
                    <SearchBox/>
                    <UserAndCartBox/>
                  </div>
                </div>
              </div>
            </header>

            <Navigation/>
            
        </div>
    </>
  )
}

export default Header;
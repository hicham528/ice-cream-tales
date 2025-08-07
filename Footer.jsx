import logo from "../../assets/footer_logo.png"
import { Link } from "react-router-dom"
function Footer() {
    return (
       <div className="flex bg-purple-700 xl:justify-around items-start p-8 flex-wrap text-white gap-8">
  {/* Logo */}
  <img src={logo} alt="Logo" className="xl:w-32 w-full object-cover" />

  {/* Navigation Menu */}
  <div className="flex flex-col gap-4">
    <h1 className="font-bold capitalize text-white xl:text-xl text-md">Navigation</h1>
    <ul className="flex flex-col gap-2">
      <li className="font-semibold capitalize hover:text-primary">
        <Link to="">Home</Link>
      </li>
      <li className="font-semibold capitalize hover:text-primary">
        <Link to="">About Us</Link>
      </li>
      <li className="font-semibold capitalize hover:text-primary">
        <Link to="">Blog</Link>
      </li>
      <li className="font-semibold capitalize hover:text-primary">
        <Link to="">FAQ's</Link>
      </li>
    </ul>
  </div>

  {/* Address Info */}
  <div className="flex flex-col gap-4">
    <h1 className="font-bold capitalize text-white xl:text-xl text-md">Address</h1>
    <p className="text-gray-300 text-sm">
      123 Vegan Street<br />
      Casablanca, Morocco<br />
      ZIP 20250
    </p>
  </div>

  {/* Personal Contact Info */}
  <div className="flex flex-col gap-4">
    <h1 className="font-bold capitalize text-white xl:text-xl text-md">Contact</h1>
    <p className="text-gray-300 text-sm">
      Phone: +212 6 12 34 56 78<br />
      Email: info@example.com<br />
      Working Hours: 9:00 - 18:00
    </p>
  </div>
</div>

    )
}

export default Footer

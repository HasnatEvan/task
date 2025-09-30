import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-gray-700">

        {/* Logo + Socials */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Business Logo</h2>
          <div className="flex space-x-4 text-xl sm:text-2xl">
            <FaFacebook className="hover:text-blue-600 transition-colors duration-300" />
            <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Plumbing</li>
            <li>Drainage</li>
            <li>Bathrooms</li>
            <li>Commercial</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-2 gap-x-6">
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Contact Us</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Customer Services</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Updates</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Locations</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">About Us</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Sitemap</li>
            <li className="whitespace-nowrap hover:text-blue-600 transition-colors">Rates</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:justify-self-end">
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <FaLocationDot className="text-lg mt-1" />
              <span>1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-lg" />
              <span>enquiries@PlumbingPros.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-lg" />
              <span>020 4527 6474</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
};

export default Footer;

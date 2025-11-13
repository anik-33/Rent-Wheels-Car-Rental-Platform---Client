import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 mt-4">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Website Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="https://i.ibb.co.com/w2xxXMQ/Gemini-Generated-Image-ig3uw0ig3uw0ig3u.png"alt="Logo" className="w-20 h-20 mb-2 rounded-full" />
            <h2 className="text-2xl font-bold">Rent Wheels</h2>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: support@rentwhiles.com</p>
            <p>Phone: +880 123 456 789</p>
            <p>Address: 123 Main Street, Dhaka, Bangladesh</p>
          </div>

          {/* Terms & Conditions */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <a href="/" className="block hover:text-pink-500 transition-colors">Terms & Conditions</a>
            <a href="/" className="block hover:text-pink-500 transition-colors">Privacy Policy</a>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-1">
              <a href="#" className="hover:text-pink-500 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Rent Wheel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

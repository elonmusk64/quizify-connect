
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PragyaParikshan</h3>
            <p className="text-sm text-gray-300">
              Empowering education through efficient exam management
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div id="contact" className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@pragyaparikshan.edu</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>123 Education Ave, Learning City, 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} PragyaParikshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

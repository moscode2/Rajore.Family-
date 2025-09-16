import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Family Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">The Rajore Family</h3>
            <p className="text-gray-300 text-sm mb-4">
              A loving family sharing our story, memories, and traditions with the world.
            </p>
            <p className="text-gray-400 text-sm">
              Made with ❤️ by the Rajore Family
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/parents" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                  Parents
                </Link>
              </li>
              <li>
                <Link to="/children" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                  Children
                </Link>
              </li>
              <li>
                <Link to="/grandchildren" className="text-gray-300 hover:text-yellow-400 text-sm transition-colors">
                  Grandchildren
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <span className="mr-2">📧</span>
                rajore.family@email.com
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="mr-2">📱</span>
                +254 791 936 043
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <span className="mr-2">📍</span>
                Family Home, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} The Rajore Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

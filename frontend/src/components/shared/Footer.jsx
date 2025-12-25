import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Job <span className="text-[#f83002]">Portal</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner in finding the perfect job. Connect with top
              employers and discover opportunities that match your skills and
              aspirations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#6a38c2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/browse"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Browse
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Job Seekers</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/profile"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-jobs"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Saved Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/career-advice"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Career Advice
                </Link>
              </li>
              <li>
                <Link
                  to="/job-alerts"
                  className="hover:text-[#6a38c2] transition-colors"
                >
                  Job Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#f83002]" />
                <span className="text-sm">support@jobportal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#f83002]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#f83002]" />
                <span className="text-sm">
                  123 Job Street, Career City, CC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Job Portal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-[#6a38c2] transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

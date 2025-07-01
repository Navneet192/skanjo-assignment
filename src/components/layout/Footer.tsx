"use client";

import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/10 text-foreground py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p>Skanjo AI Pvt Ltd</p>
          <p>91 Springboard, Bengaluru, India</p>
          <p className="mt-2">support@skanjo.ai</p>
          <p>+91-99999-00000</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Newsletter</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Stay up to date with the latest from Skanjo
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-background border border-border text-sm w-full"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/skanjo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { BrainCog } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-algoverse-950 text-gray-300 pt-16 pb-8 relative">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="container-inner relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4 group">
              <img src="/download (11).jpg" alt="Algoverse Logo" className="mr-2 h-7 w-7 object-contain" />
              <h3 className="text-xl font-bold text-white font-serif">Algoverse</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5 mr-2 text-algoverse-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+16304007637" className="text-gray-400 hover:text-white transition-colors">
                  +1 (630) 400-7637
                </a>
              </li>
              <li>
                <a href="mailto:admissions@algoverse.us" className="text-gray-400 hover:text-white transition-colors">
                  admissions@algoverse.us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Organization</h3>
            <ul className="space-y-2">
              {["Program", "Research", "News", "FAQ", "About Us"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors relative pl-0 hover:pl-2 duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Terms and Conditions", "Privacy", "Schedule a consultation"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors relative pl-0 hover:pl-2 duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Join Our Community</h3>
            <p className="text-sm text-gray-400 mb-4">
              Download our program overview and be notified about ML research opportunities for undergraduates, high school students, and industry professionals.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              We won't send you spam. Unsubscribe at any time.
            </p>
            
            <form className="space-y-3">
              <div>
                <label htmlFor="email" className="text-sm text-gray-400">Email Address*</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 bg-algoverse-900 border border-algoverse-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-algoverse-500 transition-all"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="role" className="text-sm text-gray-400">Which best describes you?*</label>
                <select 
                  id="role" 
                  className="w-full px-3 py-2 bg-algoverse-900 border border-algoverse-700 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-algoverse-500 transition-all appearance-none"
                  required
                >
                  <option value="">--Please choose an option--</option>
                  <option value="high_school">High School Student</option>
                  <option value="undergraduate">Undergraduate Student</option>
                  <option value="graduate">Graduate Student</option>
                  <option value="professional">Industry Professional</option>
                  <option value="parent">Parent</option>
                  <option value="educator">Educator</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-2 bg-gradient-to-r from-algoverse-500 to-algoverse-700 hover:from-algoverse-600 hover:to-algoverse-800 text-white rounded-md transition-all"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-algoverse-800 pt-8 text-sm text-center">
          <p className="text-gray-500">© 2025 Algoverse AI Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

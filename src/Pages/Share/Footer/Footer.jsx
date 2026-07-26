import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0c10] border-t montenegrin border-gray-800/60 py-6 text-center text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © 2026 <span className="text-white font-semibold">Razzak</span>. All rights reserved.
        </p>
        <p className="text-xs text-red-500/90 font-medium">
          ⚠️ Warning: Unauthorized copying or redistribution of this content is strictly prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-dark-bg relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {currentYear} Kushal Das. All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
          Built with <span className="text-red-500">♥</span> using Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}

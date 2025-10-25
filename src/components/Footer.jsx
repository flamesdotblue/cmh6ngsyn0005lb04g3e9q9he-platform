export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Aivoice Inc. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Status</a>
        </nav>
      </div>
    </footer>
  );
}

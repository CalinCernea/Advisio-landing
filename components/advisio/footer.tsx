import { AdvisioLogo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-navy py-10 px-6 md:px-12 border-t border-gold/15">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <AdvisioLogo size={30} />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-white tracking-wide">
              Advisio
            </span>
            <span className="text-[0.6rem] font-normal text-gold tracking-[0.12em] uppercase mt-0.5">
              AI Business Audit
            </span>
          </div>
        </div>

        <div className="text-[0.76rem] text-white/25 leading-relaxed md:text-right">
          Fără spam · Datele tale sunt în siguranță<br />
          © 2026 Advisio · <a href="mailto:hello@advisio.ro" className="text-white/35 hover:text-white/50 transition-colors">advisioai@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}

import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Daniel Castillo · Media Buyer</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

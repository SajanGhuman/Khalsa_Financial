import Social from "../components/Social";
import config from "../../config/config.json";
import menu from "../../config/menu.json";
import social from "../../config/social.json";
import Logo from "../../layouts/components/Logo";
import { markdownify } from "../../lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">{/*<Logo />*/}</div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5" style={{ color: "#674F04" }}>
              Socials
            </h3>
            <div className="mt-5" style={{ color: "#674F04" }}>
              {email && (
                <Link href={`mailto:${email}`} style={{ color: "#674F04" }}>
                  admin@khalsafinancial.com
                </Link>
              )}
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5" style={{ color: "#674F04" }}>
              Quick Links
            </h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    style={{ color: "#674F04" }}
                    className="hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="animate mt-8 md:col-6 lg:col-3 lg:mt-0"
            style={{ color: "#674F04" }}
          >
            <h3 className="h5 text-[#674F04]">Location & Contact</h3>
            <ul className="mt-5 leading-10">
              <li>Canada</li>
              {phone && (
                <li>
                  <p style={{ color: "#674F04" }}>123456789</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

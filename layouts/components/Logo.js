import ImageFallback from "../components/ImageFallback";
import config from "../../config/config.json";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link
      href="/"
      className="navbar-brand text-[50px] text-start flex justify-center items-center"
    >
      {src || logo ? (
        <ImageFallback
          width={logo_width.replace("px", "")}
          height={logo_height.replace("px", "")}
          src="/images/logo.jpeg"
          alt={title}
          priority
          style={{
            height: 200,
            width: 200,
          }}
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;

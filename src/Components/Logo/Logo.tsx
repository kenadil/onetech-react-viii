type LogoProps = {
  src: string;
};

const Logo = ({ src }: LogoProps) => {
  return (
    <div className="logo-container">
      <img src={src} alt="logo-forte" />
    </div>
  );
};

export default Logo;

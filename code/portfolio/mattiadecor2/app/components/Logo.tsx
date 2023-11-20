import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <Link className=" w-full h-full flex items-center justify-end" href="/">
        <Image
          src="/assets/mattialogo.png"
          alt="logoimg"
          width={90}
          height={90}
          className=" rounded-full"
        />
      </Link>
    </div>
  );
};

export default Logo;

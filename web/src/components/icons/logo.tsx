import { ComponentProps } from "react";

const Logo = (props: ComponentProps<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0h256v256H0z"></path>
      <path
        fill="none"
        stroke="#3c00ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M180 48h0a28 28 0 0128 28v0a28 28 0 01-28 28h-28 0V76a28 28 0 0128-28zm-76 56H76a28 28 0 01-28-28h0a28 28 0 0128-28h0a28 28 0 0128 28v28h0zm48 48h28a28 28 0 0128 28v0a28 28 0 01-28 28h0a28 28 0 01-28-28v-28h0zm-76 56h0a28 28 0 01-28-28h0a28 28 0 0128-28h28v28a28 28 0 01-28 28zm28-104h48v48h-48z"
        className="stroke-000000"
      ></path>
    </svg>
  );
};

export default Logo;

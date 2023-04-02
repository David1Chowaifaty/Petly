import { cva } from "class-variance-authority";
import { FunctionComponent } from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}
export const buttonVariants = cva(
  `bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw] active:scale-95 disabled:bg-sky-400`
);
const Button: FunctionComponent<ButtonProps> = ({ ...props }) => {
  return <button {...props}></button>;
};

export default Button;

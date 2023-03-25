import { FunctionComponent } from "react";

interface HomeCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const HomeCard: FunctionComponent<HomeCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="flex border bg-gray-50/70 rounded-lg p-2 md:p-4 h-48 w-36 md:h-64 md:w-52 lg:h-72 lg:w-64 items-center flex-col justify-around">
      <div className="p-1 relative rounded-full bg-gray-100 border flex items-center justify-center">
        {children}
      </div>
      <h2 className="text-base  text-center md:text-xl font-bold">{title}</h2>
      <p className="text-center text-xs md:text-sm">{description}</p>
    </div>
  );
};

export default HomeCard;

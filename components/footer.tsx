import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-5 max-w-[786px] mx-auto">
      <Separator className="my-6" />
      <p className="text-lg">
        <span className="text-lg">&copy;</span>
        {date.getFullYear()} IstiaqHossain
      </p>
    </footer>
  );
};

export default Footer;

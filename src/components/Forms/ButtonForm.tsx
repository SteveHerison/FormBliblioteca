type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  type?: "submit" | "reset" | "button";
};

const ButtonForm: React.FC<ButtonProps> = ({ title, type, ...rest }) => {
  return (
    <button
      className="bg-black hover:bg-black/45 p-2 rounded-xl m-7"
      type={type}
      {...rest}
    >
      {title}
    </button>
  );
};

export default ButtonForm;

const Button = ({ text }) => {
  return (
    <button className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition">
      {text}
    </button>
  );
};

export default Button;

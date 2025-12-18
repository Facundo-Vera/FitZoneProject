const NavItem = ({ children, href, active, onClick ,target }) => {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      className={`mx-1.5 sm:mx-6 border-b-2 transition-all duration-300
        ${
          active
            ? "border-primary text-white"
            : "border-transparent hover:border-primary text-white"
        }`}
    >
      {children}
    </a>
  );
};

export default NavItem;
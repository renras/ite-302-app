const Nav = () => {
  const navList: string[] = ["Collections", "Men", "Women", "About", "Contact"];

  // xl:ml-16
  return (
    <nav className="hidden md:block block h-full ml-10">
      <ul className="flex gap-8 h-full items-center">
        {navList.map((item, index) => {
          return (
            <li
              className="border-b-2 border-orange border-opacity-0 h-full flex items-center hover:border-opacity-100 text-dark-grayish-blue"
              key={index}
            >
              <a href="/">{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

import closeIcon from "../../images/icon-close-light.svg";

interface Props {
  showNavDrawer: boolean;
  closeNavDrawer: () => void;
  navList: string[];
}

const NavDrawer = ({ showNavDrawer, closeNavDrawer, navList }: Props) => {
  return (
    <div
      className={`${
        !showNavDrawer ? "w-0 overflow-hidden" : "w-full"
      } absolute left-0 h-screen z-10 bg-black md:hidden`}
    >
      <nav
        className={`${
          !showNavDrawer ? "w-0 overflow-hidden" : "w-9/12"
        } bg-white h-screen p-6 transition-all duration-700`}
      >
        <button onClick={closeNavDrawer}>
          <img src={closeIcon} alt="close" />
        </button>
        <ul className="mt-12 flex flex-col gap-6">
          {navList.map((item, index) => {
            return (
              <li key={index}>
                <a className="font-bold text-very-dark-blue text-xl" href="/">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavDrawer;

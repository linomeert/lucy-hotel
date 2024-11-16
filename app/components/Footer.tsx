const Footer: React.FC = () => {
  return (
    <footer className="bg-[#cccca3] w-full bg-cover bg-center py-20 text-black">
      <div className="container mx-auto px-4 h-full justify-between md:flex">
        <div className="max-w-sm">
          <div>
            Bringing the human touch to the way people travel. One
            apartment-hotel at a time.
          </div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-9  border-gray-400 rounded-full	 mt-5 mb-5">
            Book your stay
          </button>
          <div className="text-sm mb-5">+31 (0)20 723 90 90</div>
          <div className="text-sm">
            <p>
              This is a fictional website insprired by{" "}
              <a className="underline" href="#">
                The July
              </a>{" "}
              and developed by Lino Meert
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <FooterMenu />
        </div>
      </div>
    </footer>
  );
};

const FooterMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      <ul className="space-y-2">
        <li>ABOUT</li>
        <li>LOCATIONS</li>
        <li>FAQs</li>
        <li>CONTACT</li>
        <li>INSTAGRAM</li>
      </ul>
      <ul className="space-y-2">
        <li>CAREERS</li>
        <li>SUSTAINABILITY</li>
        <li>BOOKING TERMS</li>
        <li>SPEAK UP</li>
        <li>HOTEL DEVELOPMENT</li>
      </ul>
    </div>
  );
};

export default Footer;

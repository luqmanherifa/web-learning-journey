import logoImg from "/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-blue-900">
      <div className="mx-auto flex w-full max-w-6xl justify-between px-10 py-14">
        <div>
          <div>
            <a href="/" className="mb-5 flex w-32 items-center">
              <img
                src={logoImg}
                className="mr-3 h-8 w-8 rounded-full"
                alt="image"
              />
              <span className="font-bricolage self-center whitespace-nowrap text-xl font-bold text-white hover:underline">
                Sixdeux
              </span>
            </a>
            <p className="mb-1 text-2xl font-medium text-white">
              It's like having the entire neighborhood's business deals in your
              pocket.
            </p>
            <p className="text-2xl font-medium text-white">
              Explore a variety of deals and offerings on the Sixdeux app.
            </p>
          </div>
          <div>
            <ul className="mb-2 mt-5 flex flex-row items-center gap-3 text-sm text-white">
              <li>
                <a href="#" className="hover:underline ">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/luqmanherifa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Follow us on GitHub
                </a>
              </li>
            </ul>
            <div className="text-sm text-white">
              © 2024 Sixdeux | Sixdeux is built by{" "}
              <a
                href="https://github.com/luqmanherifa"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Luqman Herifa.
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full bg-white p-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="70"
              width="70"
              viewBox="0 0 380 512"
              fill="#1e3a8a"
            >
              <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

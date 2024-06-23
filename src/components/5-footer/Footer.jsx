import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <p>Made by Abdulrahman Musaad.</p>
      <ul className="flex">
        <a
          href="https://github.com/AbdulrahmanMossad?tab=repositories"
          className="icon icon-github"
        />
        <a
          href="https://www.linkedin.com/in/abdulrahman-mosad-9a99471b3/"
          className="icon icon-linkedin"
        />
        <a href="" className="icon icon-mail" />
      </ul>

      <p>© All Rights Reserved and Copyright .</p>
    </footer>
  );
};

export default Footer;

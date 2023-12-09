import { SiFacebook, SiInstagram, SiTelegram } from "react-icons/si";
import { contactConfig as contact } from "../../Data/config";
import GmailLogo from "../Assets/gmail-logo.svg";

export default function Contact() {
  return (
    <section className="prose mx-auto sm:px-0 py-2" id="contact">
      <h1 className="text-center mb-4 text-2xl font-bold dark:text-stone-300">
        {contact.title}
      </h1>
      <div className="grid grid-col justify-center">
        <a
          className="flex items-center no-underline text-lg py-2"
          href={`mailto:${contact.email}`}
        >
          <span className="mr-4">
            <img className="my-0" src={GmailLogo} alt="Gmail Logo" />
          </span>
          {contact.email}
        </a>
        <a
          className="flex items-center no-underline text-lg py-2"
          href={`http://www.instagram.com/${contact.instagram}`}
        >
          <span className="mr-4 text-xl text-red-500/90">
            <SiInstagram />
          </span>
          {contact.instagram}
        </a>
        <a
          className="flex items-center no-underline text-lg py-2"
          href={`http://t.me/${contact.telegram}`}
        >
          <span className="mr-4 text-cyan-500/90 text-xl">
            <SiTelegram />
          </span>
          {contact.telegram}
        </a>
        <a
          className="flex items-center no-underline text-lg py-2"
          href={`http://www.facebook.com/${contact.facebook}`}
        >
          <span className="mr-4 text-blue-500 text-xl">
            <SiFacebook />
          </span>
          Ardi Pranata
        </a>
      </div>
    </section>
  );
}

import { SiGmail, SiFacebook, SiInstagram, SiTelegram } from "react-icons/si";
import { contactConfig as contact } from "../../Data/config";

export default function Contact() {
  return (
    <section className="prose mx-auto sm:px-0 py-2" id="contact">
      <h1 className="text-center mb-4 text-2xl font-bold dark:text-stone-300">
        {contact.title}
      </h1>
      <div className="grid grid-col gap-2 justify-center">
        <a className="flex items-center py-2" href={`mailto:${contact.email}`}>
          <span className="mr-2">
            <SiGmail />
          </span>
          {contact.email}
        </a>
        <a className="flex items-center py-2" href={contact.instagram}>
          <span className="mr-2">
            <SiInstagram />
          </span>
          @_ardipranata_
        </a>
        <a className="flex items-center py-2" href={`http://t.me/${contact.telegram}`}>
          <span className="mr-2">
            <SiTelegram />
          </span>
          @{contact.telegram}
        </a>
        <a className="flex items-center py-2" href={contact.facebook}>
          <span className="mr-2">
            <SiFacebook />
          </span>
          Ardi Pranata
        </a>
      </div>
    </section>
  );
}

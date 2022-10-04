import { contactConfig as contact } from "../../Data/config";

export default function Contact() {
    return (
      <div>
        <h1>{contact.title}</h1>
        <ul>
          <li>{contact.email}</li>
          <li>{contact.facebook}</li>
          <li>{contact.telegram}</li>
        </ul>
      </div>
    );
  }
  
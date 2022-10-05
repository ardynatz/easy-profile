import { aboutConfig as about } from "../../Data/config";

export default function About() {
  return (
    <section className="prose mx-auto px-2 sm:px-0 py-2" id="about">
      <h1 className="text-2xl font-bold text-center dark:text-stone-300">{about.title}</h1>
      <p className="p-about">{about.p1}</p>
      <p className="p-about">{about.p2}</p>
      <p className="p-about">{about.p3}</p>
    </section>
  );
}

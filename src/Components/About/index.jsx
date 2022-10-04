import { about } from "../../Data/config";

export default function About() {
  return (
    <section className="prose mx-auto max-w-2xl px-2 py-4" id="about">
      <h1 className="text-2xl font-bold dark:text-stone-300">{about.title}</h1>
      <p>{about.p1}</p>
      <p>{about.p2}</p>
      <p>{about.p3}</p>
    </section>
  );
}

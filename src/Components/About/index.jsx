import { about } from "../../Data/config";

export default function About() {

  return (
    <main className="mx-auto max-w-2xl px-2 py-4" id="about">
      <div className="prose justify-center">
        <h1 className="text-2xl font-bold dark:text-stone-300">
          {about.title}
        </h1>
        <p className="text-base tracking-wide mt-6 dark:text-stone-400">
          {about.p1}
        </p>
        <p className="text-basetracking-wide mt-6 dark:text-stone-400">
          {about.p2}
        </p>
        <p className="text-base tracking-wide mt-6 dark:text-stone-400">
          {about.p3}
        </p>
      </div>
    </main>
  );
}

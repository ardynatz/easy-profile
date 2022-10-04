export default function About() {
  const data = {
    name: "Ardy Pranata",
    born: "August 14, 2002",
    age: "20",
    skill: "Web Developer",
    email: "ardiprana90@gmail.com",
    instagram: "https://www.instagram.com/_ardipranata_",
    facebook: "https://www.facebook.com/ardi.pranata.330",
    github: "https://github.com/ardipranata89",
    twitter: "https://twitter.com/ardipranata89",
  };

  return (
    <main className="mx-auto max-w-2xl px-2 py-4" id="about">
      <div className="prose justify-center">
        <h1 className="text-2xl font-bold dark:text-stone-400">
          Hello, I'm <span className="text-purple-600 dark:text-stone-300">{data.name}</span>👋
        </h1>
        <p className="text-base tracking-wide mt-6 dark:text-stone-400">
          I live in Indonesia on the island of East Java, Born on {data.born}{" "}
          which is now {data.age} yo. Starting from my interest in the World of
          Technology, now I'm focusing on learning about Software Engineer.
        </p>
        <p className="text-basetracking-wide mt-6 dark:text-stone-400">
          My current position is looking for opportunities to fill
          collaborations with the community or personally, my goal is to
          continue to learn new things with standard productivity and seek an
          experience out there.
        </p>
        <p className="text-base tracking-wide mt-6 dark:text-stone-400">
          Another thing about me that might interest you, I really like to play
          music, enjoy nature, play games.
        </p>
      </div>
    </main>
  );
}

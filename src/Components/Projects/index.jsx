import { projects } from "../../Data/config";

export default function Project() {
  return (
    <div className="mx-auto max-w-xl px-2 py-4">
      <h1 className="text-center text-2xl font-bold dark:text-stone-300">
        {projects.title}
      </h1>
      <div className="max-w-sm rounded mt-6 overflow-hidden hover:shadow-stone-800/50 shadow-lg dark:bg-stone-900/25">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 dark:text-stone-400">The Coldest Sunset</div>
          <p className="text-black text-base dark:text-stone-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}

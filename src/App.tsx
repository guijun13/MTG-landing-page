import data from './db/data.json';

export default function App() {
  return (
    <>
      <div className="p-4 bg-gradient-to-r from-orange-400 to-pink-600">
        <header className="flex justify-between">
          <a href={data.logo.url}>
            <img src={data.logo.img} alt={data.logo.alt} />
          </a>
          <nav className="flex items-center gap-x-4">
            <div className="flex flex-col md:flex-row md:gap-x-4">
              {data.navbar.map((item) => {
                return (
                  <div key={item.id}>
                    <a className="text-slate-50" href={item.url}>
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <button className="p-2 border border-slate-200 rounded-full text-slate-50">
              Login
            </button>
            <button className="p-2 rounded-full bg-indigo-500 text-slate-50">Sign up free</button>
          </nav>
        </header>
        <section className="mt-8 md:mx-28 flex flex-col gap-y-4 justify-center items-center md:flex-row">
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <p className="font-bold md:text-[34px] text-slate-50 text-center md:text-start">
              {data.heroSection.mainTitle}
            </p>
            <button className="w-fit py-2 px-4 rounded-full bg-violet-500 text-slate-50">
              {data.heroSection.buttonText}
            </button>
          </div>
          <img src={data.heroSection.img} alt="Head image" />
        </section>
      </div>
      <main className="mx-10 md:mx-36">
        <section className="mt-24 mb-16">
          <h1 className="mb-12 md:mb-20 text-violet-600 text-xl md:text-[34px] font-bold text-center">
            {data.about.title}
          </h1>
          <section className="flex flex-col gap-y-16 md:flex-row md:gap-x-4">
            {data.about.items.map((item) => {
              return (
                <article
                  className="flex flex-col gap-y-4 justify-between items-center text-center"
                  key={item.id}
                >
                  <img src={item.img} alt={item.title} />
                  <h3 className="text-violet-600 font-bold text-lg">{item.title}</h3>
                  <p className="text-black font-medium text-lg">{item.description}</p>
                  <a className="text-violet-600 font-bold text-lg" href={item.url}>
                    &gt; Learn more
                  </a>
                </article>
              );
            })}
          </section>
        </section>
        <section className="bg-violet-700 mb-32 p-8 md:p-12 text-slate-50 text-center rounded-3xl">
          <h1 className="mb-12 md:mb-20 text-xl md:text-[34px] font-bold">{data.features.title}</h1>
          <h3 className="mb-12 text-center text-xl">{data.features.subtitle}</h3>
          <div className="md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-4">
            {data.features.items.map((item) => {
              return (
                <div className="flex flex-col gap-y-4 pt-20" key={item.id}>
                  <img className="h-20" src={item.img} alt={item.title} />
                  <h4 className="font-bold">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
          <button className="mt-4 border border-solid border-slate-50 py-2 px-4 rounded-full uppercase">
            {data.features.exploreButton}
          </button>
        </section>
      </main>
    </>
  );
}

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
            <button className="p-2 border border-slate-200 rounded-full">Login</button>
            <button className="p-2 rounded-full bg-indigo-500 text-slate-50">Sign up free</button>
          </nav>
        </header>
        <section className="m-4 flex flex-col gap-y-4 justify-center items-center md:flex-row">
          <div className="flex flex-col gap-y-4 items-center md:items-start">
            <p className="font-bold text-slate-50 text-center md:text-start">
              Discover all possibilities of using this powerfull tool and create science figures,
              posters and infographics.
            </p>
            <button className="w-fit py-2 px-4 rounded-full bg-violet-500 text-slate-50">
              Start creating now
            </button>
          </div>
          <img src="" alt="Big image here" />
        </section>
      </div>
      <main>
        <section>
          <h1>{data.about.title}</h1>
          {data.about.items.map((item) => {
            return (
              <article key={item.id}>
                <img src={item.img} alt={item.title} />
                <title>{item.title}</title>
                <p>{item.description}</p>
                <a href={item.url}>&gt; Learn more</a>
              </article>
            );
          })}
        </section>
        <section>
          <h1>{data.features.title}</h1>
          <h3>{data.features.subtitle}</h3>
          {data.features.items.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.img} alt={item.title} />
                <title>{item.title}</title>
                <p>{item.description}</p>
              </div>
            );
          })}
          <button>Explore Mind the graph</button>
        </section>
      </main>
    </>
  );
}

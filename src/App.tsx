import data from './db/data.json';

export default function App() {
  return (
    <>
      <header>
        <a href={data.logo.url}>
          <img src={data.logo.img} alt={data.logo.alt} />
        </a>
        <nav>
          {data.navbar.map((item) => {
            return (
              <div key={item.id}>
                <a href={item.url}>{item.name}</a>
              </div>
            );
          })}
          <button>Login</button>
          <button>Sign up free</button>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <p>
              Discover all possibilities of using this powerfull tool and create science figures,
              posters and infographics.
            </p>
            <button>Start creating now</button>
          </div>
          <img src="" alt="" />
        </section>
        <section>
          <h1>{data.about.title}</h1>
          <div>
            {data.about.items.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <title>{item.title}</title>
                  <p>{item.description}</p>
                  <a href={item.url}>&gt; Learn more</a>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>{data.features.title}</h1>
          <h3>{data.features.subtitle}</h3>
          <div>
            {data.features.items.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <title>{item.title}</title>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
          <button>Explore Mind the graph</button>
        </section>
      </main>
    </>
  );
}

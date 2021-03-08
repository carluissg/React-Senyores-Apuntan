function App() {
  const senyores = [
    {
      id: 1,
      nombre: "El Fary",
      profesion: "Influencer",
      foto: "fary.jpg",
      estado: "R.I.P.",
      twitter: "Pendiente",
      marcado: true
    },
    {
      id: 2,
      nombre: "Julio Iglesias",
      profesion: "Youtuber",
      foto: "julio.jpg",
      estado: "Vivo",
      twitter: "@JulyChurchs",
      marcado: false
    },
    {
      id: 3,
      nombre: "Bertín Osborne",
      profesion: "Java Developer",
      foto: "bertin.jpg",
      estado: "Vivo",
      twitter: "@BertinOsborne",
      marcado: true
    }
  ];
  return (
    <div className="contenedor">
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">0</span> señores que te apuntan con el dedo marcados</p>
        <a className="accion-marcar" href="marcar-todos">Marcar todos</a>
      </header>
      <main>
        {
          senyores.map(famoso =>
            <article key={famoso.id} className="senyor">
              <div className="avatar">
                <img src={`src/img/${famoso.foto}`} alt={`El famosisimo y gran ${famoso.nombre} apuntandote con el dedo`} />
                <span className="inicial">{famoso.foto.charAt(0).toUpperCase()}</span>
              </div>
              <div className="info">
                <h2>{famoso.nombre}</h2>
                <ul>
                  <li><span className="etiqueta">Profesión:</span>{famoso.profesion}</li>
                  <li><span className="etiqueta">Estado:</span>{famoso.estado}</li>
                  <li><span className="etiqueta">Twitter:</span>{famoso.twitter}</li>
                </ul>
              </div>
              <i className="icono fas fa-check"></i>
            </article>)}
      </main>
    </div>
  );
}

export default App;

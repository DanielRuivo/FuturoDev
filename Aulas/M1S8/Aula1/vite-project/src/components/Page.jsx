function BasePage() {
  return (
    <>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
            <li>
              <a href="/">
                <Home />
              </a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmyloview.com.br%2Fadesivo-icone-do-atomo-simbolo-do-atomo-vetor-pesquisa-de-quimica-e-no-72F1633&psig=AOvVaw2Q_y7L-Wrtr1gy9-biOGow&ust=1746750873037000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDO66TQko0DFQAAAAAdAAAAABAE"/>
      </div>
      <footer>
        <p>Creditos de Daniel</p>
      </footer>
    </>
  );
}

export default BasePage;

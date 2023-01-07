
export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }
//     console.log(characters) 
// El console.log lo usamos para verificar por consola de desarrollador que nuestro código nos trae los objetos correspondientes
  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>back home</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === 'Alive' ? (
                                <>
                                    <span className="alive" />
                                    Alive
                                </>
                            ) : (
                                <>
                                    <span className="dead" />
                                    Dead
                                </>
                            )}
                        </h6>
                        <p className="text-grey">
                            <span>Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ) )}
        </div>
        <span className="back-home" onClick={resetCharacters}>back home</span>
        <footer className="footer">
            <a href='https://www.linkedin.com/in/ricardo-ricoz/'>
            by programador5781</a>
        </footer>
    </div>
  )
}

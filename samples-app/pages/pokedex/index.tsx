import * as Styles from './styles';
import pokemon from './pokemon.json';

export default function Pokedex() {
  return (
    <Styles.CardList>
      {pokemon.map(x => (
        <Styles.Card
          key={x.id}
          type={x.typeofpokemon[0].toLowerCase()}
        >
          <div className={'front'}>
            <header>
              <Styles.Id>{x.id.substring(1)}</Styles.Id>
              <img src={x.imageurl} />
            </header>
            <main>
              <Styles.Title>{x.name}</Styles.Title>
              <Styles.TypeIcon name={x.typeofpokemon[0].toLowerCase()} />
            </main>
          </div>
          <div className={'back'}>
            <header>
              <Styles.Id>{x.id.substring(1)}</Styles.Id>
              <Styles.Title>{x.name}</Styles.Title>
            </header>
            <main>
              <Styles.Space />
              <Styles.Types>
                {x.typeofpokemon.map(t => (
                  <Styles.TypeIcon key={t} name={t.toLowerCase()} />
                ))}
              </Styles.Types>
              <Styles.Space />
              <Styles.Stats>
                <div>
                  <span>HP</span><span>{x.hp}</span>
                </div>
                <div>
                  <span>Attack</span><span>{x.attack}</span>
                </div>
                <div>
                  <span>Defense</span><span>{x.defense}</span>
                </div>
                <div>
                  <span>Sp. Attack</span><span>{x.special_attack}</span>
                </div>
                <div>
                  <span>Sp. Defense</span><span>{x.special_defense}</span>
                </div>
                <div>
                  <span>Total</span><span>{x.total}</span>
                </div>
              </Styles.Stats>
            </main>
          </div>
        </Styles.Card>
      ))}
    </Styles.CardList>
  );
}
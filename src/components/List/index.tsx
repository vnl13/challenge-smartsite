import Image from 'next/image';
import { useLocations } from '../../contexts/Locations';
import { Container, ListItem } from './styles';

export function List() {
  const { filtered } = useLocations();
  return (
    <Container>
      {!!filtered ? (
        filtered.map((location) => {
          return (
            <ListItem key={location.id} isOpen={location.opened}>
              <header>
                <strong>{location.situation}</strong>
                <h3>{location.title}</h3>
                <p>
                  {location.street} <br />
                  {location.city}
                </p>
              </header>
              {location.opened && (
                <>
                  <section>
                    <Image
                      src={`/images/${location.mask}-mask.png`}
                      alt='Máscara'
                      width='60%'
                      height='60%'
                    />
                    <Image
                      src={`/images/${location.towel}-towel.png`}
                      alt='Toalha'
                      width='60%'
                      height='60%'
                    />
                    <Image
                      src={`/images/${location.fountain}-fountain.png`}
                      alt='Bebedouro'
                      width='60%'
                      height='60%'
                    />
                    <Image
                      src={`/images/${location.locker_room}-lockerroom.png`}
                      alt='Vestiários'
                      width='60%'
                      height='60%'
                    />
                  </section>
                  <footer>
                    {location.schedules.map((schedule, index) => (
                      <div key={index}>
                        <h4>{schedule.weekdays}</h4>
                        <span>{schedule.fullHour}</span>
                      </div>
                    ))}
                  </footer>
                </>
              )}
            </ListItem>
          );
        })
      ) : (
        <p>Nenhuma unidade encontrada</p>
      )}
    </Container>
  );
}

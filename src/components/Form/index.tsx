import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { useLocations } from '../../contexts/Locations';
import { Container, Schedules } from './styles';

type LocationFormatted = {
  id: number;
  title: string;
  street: string;
  city: string;
  opened: boolean;
  situation: string;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: {
    weekdays: string;
    hours: {
      open: number;
      close: number;
    };
    fullHour: string;
  }[];
};

export function Form() {
  const { locations, filterLocations } = useLocations();
  const [period, setPeriod] = useState('');
  const [showClosed, setShowClosed] = useState(false);
  const [total, setTotal] = useState(0);

  const updateLocations = useCallback(
    (array: LocationFormatted[], period: string, showClosed: boolean) => {
      let hours = {} as { start: number; end: number } | undefined;

      switch (period) {
        case 'morning':
          hours = { start: 6, end: 12 };
          break;
        case 'afternoon':
          hours = { start: 12, end: 18 };
          break;
        case 'evening':
          hours = { start: 18, end: 23 };
          break;
        default:
          hours = undefined;
          break;
      }

      let newLocations = array?.filter((location: LocationFormatted) => {
        if (!showClosed) {
          return (
            location.schedules?.some((schedule) => {
              if (hours) {
                return (
                  schedule.hours.open <= hours.start &&
                  schedule.hours.close >= hours.end
                );
              }
              return schedule;
            }) && location.opened
          );
        }

        return location.schedules?.some((schedule) => {
          if (hours) {
            return (
              schedule.hours.open <= hours.start &&
              schedule.hours.close >= hours.end
            );
          }
          return schedule;
        });
      });
      setTotal(newLocations.length);
    },
    []
  );

  useEffect(() => {
    updateLocations(locations, period, showClosed);
  }, [locations, period, showClosed, updateLocations]);

  function findUnit() {
    filterLocations(period, showClosed);
  }

  function clearFilters() {
    setPeriod('');
    setShowClosed(false);
  }

  return (
    <Container>
      <div>
        <span>
          <Image src='/images/hour.png' alt='Relógio' width={25} height={25} />
          Horário
        </span>
        <Schedules>
          <legend>Qual período quer treinar?</legend>

          <label htmlFor='morning'>
            <input
              id='morning'
              type='radio'
              name='period'
              value='morning'
              checked={'morning' === period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Manhã<span>06:00 às 12:00</span>
          </label>

          <label htmlFor='afternoon'>
            <input
              id='afternoon'
              type='radio'
              name='period'
              value='afternoon'
              checked={'afternoon' === period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Tarde<span>12:01 às 18:00</span>
          </label>

          <label htmlFor='evening'>
            <input
              id='evening'
              type='radio'
              name='period'
              value='evening'
              checked={'evening' === period}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Noite<span>18:01 às 23:00</span>
          </label>
        </Schedules>
        <div>
          <label htmlFor='closed'>
            <input
              type='checkbox'
              onChange={() => setShowClosed(!showClosed)}
              checked={showClosed}
              id='closed'
              name='closed'
            />
            Exibir unidades fechadas
          </label>
          <span>
            Resultados encontrados: <strong>{total}</strong>
          </span>
        </div>
        <footer>
          <button type='button' onClick={findUnit}>
            ENCONTRAR UNIDADE
          </button>
          <button type='button' onClick={clearFilters}>
            LIMPAR
          </button>
        </footer>
      </div>
    </Container>
  );
}

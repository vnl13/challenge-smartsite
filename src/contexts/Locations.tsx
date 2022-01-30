import {
  useContext,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from 'react';
import { api } from '../services/api';

interface LocationsProviderData {
  children: ReactNode;
}

type Location = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  locker_room: string;
  schedules: {
    weekdays: string;
    hour: string;
  }[];
};

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

type State = {
  locations: LocationFormatted[];
  filtered: LocationFormatted[] | undefined;
};

type Action = {
  type: string;
  payload?: LocationFormatted[];
  hours?: string | undefined;
  showClosed?: boolean;
};

type LocationsContextData = {
  locations: LocationFormatted[];
  filtered: LocationFormatted[] | undefined;
  filterLocations: (period: string, showClosed: boolean) => void;
};

export const LocationsContext = createContext({} as LocationsContextData);

export function LocationsProvider({ children }: LocationsProviderData) {
  const [state, dispatch] = useReducer(
    (state: State, action: Action): State => {
      switch (action.type) {
        case 'fetch':
          return {
            locations: action.payload ?? state.locations,
            filtered: undefined,
          };

        case 'filter':
          let { locations, filtered } = state;
          filtered = updateLocations(
            locations,
            action.hours,
            action.showClosed
          );
          return {
            ...state,
            filtered,
          };
        default:
          return state;
      }
    },
    {
      locations: [],
      filtered: undefined,
    }
  );

  useEffect(() => {
    api
      .get('/locations.json')
      .then((response) => response.data.locations)
      .then((locations) => {
        const formatted = locations.map((location: Location) => {
          let content = location.content
            ?.replace(/(\n|[^\w\s,À-ú<>]|\<\/?p\>)/gi, '')
            .replace('8211', '-')
            .replace('8217', "'")
            .split('<br>');
          return {
            id: location.id,
            title: location.title,
            street: content ? content[0] : '',
            city: content ? content[1] : '',
            opened: location.opened,
            situation: location.opened ? 'Aberto' : 'Fechado',
            mask: location.mask,
            towel: location.towel,
            fountain: location.fountain,
            locker_room: location.locker_room,
            schedules: location.schedules?.map((schedule) => {
              if (schedule.hour === 'Fechada') {
                return {
                  weekdays: schedule.weekdays,
                  hours: { open: undefined, close: undefined },
                  fullHour: 'Fechada',
                };
              }
              let hours = schedule.hour
                .split(' às ')
                .map((hour) => hour.replace('h', ''));
              return {
                weekdays: schedule.weekdays,
                fullHour: schedule.hour,
                hours: { open: parseInt(hours[0]), close: parseInt(hours[1]) },
              };
            }),
          };
        });
        return formatted;
      })
      .then((formattedLocations) => {
        dispatch({
          type: 'fetch',
          payload: formattedLocations,
          hours: undefined,
        });
      });
  }, []);

  function updateLocations(
    array: LocationFormatted[],
    period?: string,
    showClosed?: boolean
  ): LocationFormatted[] {
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

    const newLocations = array.filter((location: LocationFormatted) => {
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
    return newLocations;
  }

  function filterLocations(period: string, showClosed?: boolean) {
    return dispatch({
      hours: period,
      type: 'filter',
      showClosed,
    });
  }

  return (
    <LocationsContext.Provider
      value={{
        filterLocations,
        locations: state.locations,
        filtered: state.filtered,
      }}
    >
      {children}
    </LocationsContext.Provider>
  );
}

export const useLocations = () => useContext(LocationsContext);

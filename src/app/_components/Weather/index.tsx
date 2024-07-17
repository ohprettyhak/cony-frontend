import Image from 'next/image';
import { FC, ReactElement } from 'react';

import useWeatherQuery from '@/hooks/queries/useWeatherQuery';

import useGeolocation from './useGeolocation';
import * as styles from './Weather.css';

const Weather: FC = (): ReactElement | null => {
  const { location } = useGeolocation();

  const { data } = useWeatherQuery({
    lat: location.latitude,
    lng: location.longitude,
  });

  if (!data) return null;

  const { data: weather } = data;

  return (
    <span className={styles.container}>
      <Image
        width={16}
        height={16}
        draggable={false}
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${weather.icon}`}
        alt={weather.description}
      />
      <p className={styles.text}>{weather.temperature.toFixed(1)}℃</p>
    </span>
  );
};

export default Weather;

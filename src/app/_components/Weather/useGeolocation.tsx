import { useEffect, useState } from 'react';

type Location = {
  latitude?: number;
  longitude?: number;
};

const useGeolocation = (): { location: Location; error: string | null } => {
  const [location, setLocation] = useState<Location>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSuccess = ({ coords }: GeolocationPosition) => {
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    };

    const handleError = (err: GeolocationPositionError) => {
      setError(err.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { location, error };
};

export default useGeolocation;

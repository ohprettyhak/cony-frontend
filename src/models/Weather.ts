export interface Weather {
  id: number;
  temperature: number;
  weather: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  icon: string;
  createdAt: Date;
}

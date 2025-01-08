import { UserId } from '@core/domain/entities/UserId';

export interface UserProps {
  id: UserId;
  firstName: string;
  lastName: string;
  age: number;
}

export interface UserJson {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

import {Device} from './device';

export interface Resbody {
  content: Device[];
  pageable: string;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  sort: string;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

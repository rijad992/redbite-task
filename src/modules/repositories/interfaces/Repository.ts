import { Owner } from './Owner';

export interface Repository {
  owner?: Owner;
  full_name: string;
  description: string;
  html_url: string;
}

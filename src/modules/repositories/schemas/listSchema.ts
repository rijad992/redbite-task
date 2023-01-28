import { DataGridColumn } from '../../../components/data-grid/types';

export const listSchema: DataGridColumn[] = [
  { label: 'Profile picture', property_name: 'avatar_url' },
  { label: 'Full Name', property_name: 'full_name', searchable: true },
  { label: 'Repo url', property_name: 'html_url', searchable: true },
  { label: 'Description', property_name: 'description' },
];

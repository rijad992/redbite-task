import { FunctionComponent } from 'react';
import { Input } from './partials/Input';

export interface SearchInputProps {
  onSearchInputChange: (event: any) => void;
  value: string;
}

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  value,
  onSearchInputChange,
}) => {
  return <Input type='Text' value={value} onChange={onSearchInputChange} placeholder='Search' />;
};

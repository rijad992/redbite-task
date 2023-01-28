import { FunctionComponent } from 'react';
import { DataGrid, Flex } from '../../components';
import { useGetList } from './api/useGetList';
import { listSchema } from './schemas/listSchema';

export const ENTITY = 'repositories';

export const Repositories: FunctionComponent = () => {
  const { data, isFetching } = useGetList();

  if (isFetching) return null;

  const custom = {
    avatar_url: (value: string) => <img src={value} width='100' height={100}></img>,
    html_url: (value: string) => (
      <a href={value} target='_blank'>
        {value}
      </a>
    ),
  };

  return (
    <Flex flexDirection='column' flex={1} overflow='hidden' width='100%' padding='40px 20px'>
      <DataGrid paginate={10} columns={listSchema} data={data} custom={custom} />
    </Flex>
  );
};

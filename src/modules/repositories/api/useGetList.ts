import { useQuery } from 'react-query';
import { ENTITY } from '../Repositories';
import { httpGet } from '../../../utils/http';
import { Repository } from '../interfaces/Repository';
import { Owner } from '../interfaces/Owner';

type RepositoriesList = Omit<Repository & Owner, 'owner'>;

const fetchList = () => httpGet<Repository[]>(ENTITY);

export const useGetList = () =>
  useQuery({
    queryKey: `${ENTITY}_LIST`,
    queryFn: async () => {
      const res = await fetchList();

      return res.map((item) =>
        Object.fromEntries(
          Object.entries({
            ...item,
            avatar_url: item?.owner?.avatar_url,
            login: item.owner?.login,
          }).filter((e) => e[0] != 'owner'),
        ),
      ) as RepositoriesList[];
    },
  });

import { FunctionComponent, useEffect, useState } from 'react';
import { Flex } from '../../flex';
import { PaginationButton } from './PaginationButton';

export interface PaginationBarProps {
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNum: number) => void;
}

export const PaginationBar: FunctionComponent<PaginationBarProps> = ({
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  useEffect(() => {
    if (totalPages > page) {
      setPage(1);
      onPageChange(page);
    }
  }, [totalPages]);

  const onSetNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const onSetPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <Flex
      width='100%'
      justifyContent='flex-end'
      alignItems='center'
      columnGap='10px'
      padding='15px 0'
    >
      <Flex alignItems='center' columnGap='10px'>
        {'Total: ' + totalPages}
        <PaginationButton onClick={onSetPrevPage} disabled={page === 1}>
          {'<'}
        </PaginationButton>
        {page}
        <PaginationButton onClick={() => onSetNextPage()} disabled={page >= totalPages}>
          {'>'}
        </PaginationButton>
      </Flex>
    </Flex>
  );
};

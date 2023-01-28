import { useCallback, useMemo, useState } from 'react';
import { useInputState } from '../../hooks/useInputState';
import { Flex } from '../flex';
import { SearchInput } from '../search-input/SearchInput';
import { HeaderCell } from './partials/HeaderCell';
import { PaginationBar } from './partials/PaginationBar';
import { Table } from './partials/Table';
import { TableCell } from './partials/TableCell';
import { TableRow } from './partials/TableRow';
import { DataGridColumn } from './types';

export interface DataGridProps<DataType> {
  columns: DataGridColumn[];
  data: Array<DataType> | undefined;
  paginate: 10 | 15 | 20 | 30;
  custom?: Partial<Record<keyof DataType, (cell: any) => JSX.Element>>;
}

export const DataGrid = <T extends { [key: string]: string | number }>({
  columns,
  data,
  paginate,
  custom,
}: DataGridProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, onChange] = useInputState('');

  const tableData =
    useMemo(() => {
      let filteredData = data;
      if (searchValue) {
        filteredData = filteredData?.filter((dataItem) => {
          let showRow = false;
          Object.keys(dataItem).every((propertykey) => {
            const column = columns.filter((column) => column.property_name === propertykey);
            if (column[0]?.searchable) {
              showRow = (dataItem[propertykey] as string).includes(searchValue);
              return false;
            }
            return true;
          });

          return showRow;
        });
      }
      return {
        data: filteredData?.slice(
          currentPage === 1 ? currentPage - 1 : (currentPage - 1) * paginate,
          currentPage === 1 ? paginate - 1 : currentPage * paginate - 1,
        ),
        total: filteredData?.length,
      };
    }, [currentPage, searchValue]) || [];

  if (!tableData.total) return <div>No data</div>;

  return (
    <>
      <Flex flex={1} flexDirection='column' overflow='hidden' width='100%'>
        <Flex
          width='100%'
          justifyContent='flex-end'
          alignItems='center'
          columnGap='10px'
          padding='20px 0'
        >
          <SearchInput value={searchValue} onSearchInputChange={onChange} />
        </Flex>
        <Flex flex={1} flexDirection='column' overflow='auto' width='100%'>
          <Table>
            <tbody style={{ tableLayout: 'fixed' }}>
              <TableRow key='header-row'>
                {columns.map((column) => (
                  <HeaderCell key={column.property_name + column.label}>{column.label}</HeaderCell>
                ))}
              </TableRow>
              {tableData?.data?.slice().map((dataRow, index) => (
                <TableRow key={dataRow.id + index.toLocaleString()}>
                  {columns.map((column) => (
                    <TableCell key={column.property_name}>
                      {custom && custom[column.property_name]
                        ? //@ts-ignore
                          custom[column.property_name](dataRow[column.property_name])
                        : dataRow[column.property_name]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Flex>
      </Flex>
      {paginate && (
        <PaginationBar
          itemsPerPage={paginate}
          totalItems={tableData.total || 0}
          onPageChange={(pageNum) => setCurrentPage(pageNum)}
        />
      )}
    </>
  );
};

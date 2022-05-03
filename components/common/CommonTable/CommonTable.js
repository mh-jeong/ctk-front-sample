import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useFilters, useGlobalFilter, useSortBy, useTable } from "react-table";

import CommonModal from "../../../feature/app/CommonModal";
import {
  DefaultColumnFilter,
  filterGreaterThan,
  fuzzyTextFilterFn,
  GlobalFilter,
  NumberRangeColumnFilter,
  SelectColumnFilter,
  SliderColumnFilter,
} from "./CommonTable.filter";
import * as S from "./CommonTable.styled";

const CommonTable = ({ title, propData }) => {
  const data = useMemo(() => propData, []);
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Original Title",
        accessor: "original_title", // accessor is the "key" in the data
      },
      {
        Header: "Overview",
        accessor: "overview", // accessor is the "key" in the data
      },
      {
        Header: "Vote Average",
        accessor: "vote_average",
        Filter: SliderColumnFilter,
        filter: "equals",
      },
      {
        Header: "Release Date",
        accessor: "release_date",
      },
    ],
    [],
  );
  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    [],
  );
  const defaultColumn = useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
  );

  const [rowHeight, setRowHeight] = useState(12);
  const increaseRowHeight = () => {
    setRowHeight((prev) => (prev += 1));
  };
  const decreaseRowHeight = () => {
    setRowHeight((prev) => (prev -= 1));
  };

  const router = useRouter();
  const handleClickRow = (e) => {
    router.push(`/inbound/process/${e.currentTarget.dataset.id}`);
  };

  return (
    <>
      <S.TableTitle>
        <div>{title}</div>
        <div>
          <button onClick={increaseRowHeight}>+</button>
          <button onClick={decreaseRowHeight}>−</button>
        </div>
      </S.TableTitle>
      <S.StyledTable padding={rowHeight + "px"}>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                    {/*<div>{column.canFilter ? column.render("Filter") : null}</div>*/}
                  </th>
                ))}
              </tr>
            ))}
            <tr></tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={handleClickRow}
                        data-id={row.original.id}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <div style={{ textAlign: "right" }}>Showing the first 20 results of {rows.length} rows</div>
        {/*<div>*/}
        {/*  <pre>*/}
        {/*    <code>{JSON.stringify(state.filters, null, 2)}</code>*/}
        {/*  </pre>*/}
        {/*</div>*/}
        <CommonModal
          title={"Detail Search Modal"}
          content={"Detail Search Modal Body"}
          isConfirmModal={true}
        />
      </S.StyledTable>
    </>
  );
};

export default CommonTable;

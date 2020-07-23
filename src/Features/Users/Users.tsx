import React from "react";
import { useHistory, useLocation, Route, Switch } from "react-router-dom";
import { Box } from "reflexbox";
import { useQuery } from "Hooks";
import {
  DataTable,
  DataTableSkeleton,
  ErrorMessage,
  Error404,
  Pagination,
} from "@boomerang-io/carbon-addons-boomerang-react";
import User from "./User";
import { isAccessibleEvent } from "@boomerang-io/utils";
import FeatureHeader from "Components/FeatureHeader";
import queryString from "query-string";
import { appLink, AppPath } from "Config/appConfig";
import { SortDirection } from "Constants";
import { serviceUrl } from "Config/servicesConfig";
import { FlowUser, PaginatedResponse } from "Types";

const getUsersUrl = serviceUrl.getManageUsers();

const UsersContainer: React.FC = () => {
  return (
    <Switch>
      <Route path={AppPath.User}>
        <User />
      </Route>
      <Route exactpath={AppPath.UserList}>
        <UserList />
      </Route>
    </Switch>
  );
};

export default UsersContainer;

const FeatureLayout: React.FC = ({ children }) => {
  return (
    <>
      <FeatureHeader>
        <h1 style={{ fontWeight: 600, margin: 0 }}>Users</h1>
        <p>View and manage all of the Flow users</p>
      </FeatureHeader>
      <Box p="1rem">{children}</Box>
    </>
  );
};

const UserList: React.FC = () => {
  const usersQuery = useQuery(getUsersUrl);

  if (usersQuery.isLoading) {
    return (
      <FeatureLayout>
        <DataTableSkeleton />
      </FeatureLayout>
    );
  }

  if (usersQuery.isError) {
    return (
      <FeatureLayout>
        <ErrorMessage />
      </FeatureLayout>
    );
  }
  return (
    <FeatureLayout>
      <UsersTable usersData={usersQuery.data} />
    </FeatureLayout>
  );
};

const DEFAULT_ORDER = SortDirection.Desc;
const DEFAULT_PAGE = 0;
const DEFAULT_SIZE = 10;
const DEFAULT_SORT = "name";
const PAGE_SIZES = [DEFAULT_SIZE, 20, 50, 100];

const headers = [
  {
    header: "Name",
    key: "name",
    sortable: true,
  },
  {
    header: "Email",
    key: "email",
    sortable: true,
  },
  {
    header: "Type",
    key: "type",
  },
  {
    header: "Created",
    key: "firstLoginDate",
  },
  {
    header: "Status",
    key: "status",
  },
];

interface UsersTableProps {
  usersData: PaginatedResponse<FlowUser>;
}

const UsersTable: React.FC<UsersTableProps> = ({ usersData }) => {
  const history = useHistory();
  const location = useLocation();

  // const handleSearchChange = (e) => {
  //   const searchQuery = e.target.value;
  //   setPage(1);
  //   setSearchQuery(searchQuery);
  // };

  /**
   * Function that updates url search history to persist state
   * @param {object} query - all of the query params
   *
   */
  const updateHistorySearch = ({
    order = DEFAULT_ORDER,
    page = DEFAULT_PAGE,
    size = DEFAULT_SIZE,
    sort = DEFAULT_SORT,
    ...props
  }) => {
    const queryStr = `?${queryString.stringify({ order, page, size, sort, ...props })}`;
    history.push({ search: queryStr });
    return;
  };

  function handlePaginationChange(pagination: { page: number; pageSize: number }) {
    updateHistorySearch({
      ...queryString.parse(location.search),
      page: pagination.page - 1, // We have to decrement by one to offset the table pagination adjustment
      size: pagination.pageSize,
    });
  }

  function handleSort(e: React.SyntheticEvent, sort: { sortHeaderKey: string }) {
    const { property, direction } = usersData.sort[0];
    let order = SortDirection.Asc;

    if (sort.sortHeaderKey === property && direction === SortDirection.Asc) {
      order = SortDirection.Desc;
    }

    updateHistorySearch({ ...queryString.parse(location.search), order, sort: sort.sortHeaderKey });
  }

  function navigateToUser(userId: string) {
    history.push(appLink.user({ userId }));
  }

  const { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TableHeader } = DataTable;

  const { number: page, sort, totalElements, totalPages, records } = usersData;

  return totalElements > 0 ? (
    <>
      <DataTable
        rows={records}
        headers={headers}
        render={({ rows, headers, getHeaderProps }: any) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header: any) => (
                    <TableHeader
                      id={header.key}
                      {...getHeaderProps({
                        header,
                        isSortable: header.sortable,
                        onClick: handleSort,
                      })}
                      isSortHeader={sort[0].property === header.key}
                      sortDirection={sort[0].direction}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow
                    key={row.id}
                    data-testid="user-list-table-row"
                    onClick={() => navigateToUser(row.id)}
                    onKeyDown={(e: React.SyntheticEvent) => isAccessibleEvent(e) && navigateToUser(row.id)}
                    tabIndex={0}
                  >
                    {row.cells.map((cell: any, cellIndex: any) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
      <Pagination
        onChange={handlePaginationChange}
        page={page}
        pageSize={totalPages}
        pageSizes={PAGE_SIZES}
        totalItems={totalElements}
      />
    </>
  ) : (
    <Error404 message={null} title="No users found" header={null} />
  );
};
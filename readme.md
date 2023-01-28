# Project info

## Build and run

Project has been created using vite.
Written in react using typescript.
Project is using styled components.
To run the project clone repository to your local machine and run `npm install` and `npm run dev` commands.

## Packages used

- [React query](https://github.com/TanStack/query)

## Directory structure

- src

  - components

    Contains components used troughout all the pages. Every component is placed in subfolder with its own partial components placed in partials directroy,

  - config

    Contains client side config

  - hooks

    Contains utility hooks reused by multiple components

  - modules

    Contains application logical entites split into modules. These are single units of the application that contain logic only applicable to paticular module. Components or anything else for that matter inside module subfolders should not be shared between modules. If thats the case, it should be refactored to specific shared folder accordingly.

    ### Modules subfolders structure

        * components
            Components used only by paticular module

        * api
            Contains hooks that extend fetch or mutate hooks from `react-query` library

        * interfaces
            Contains interfaces that represent data types

        * schemas
            Contains predefined schemas for displaying tabular data. Row columns are defined in `DataGridColumn`. `property_key` key value must match key of passed data value to the `DataGrid` component

        * utils
            Contains collection of reusable utility functions

## Data grid component

Data grid component is used for displaying tabular data. Data is searchable by default. Serchable columns are defined in columns schema using `searchable` key. If key is not defined data will not be searchable by default.

`<DataGrid paginate={10} columns={listSchema} data={data} custom={custom} />`

### Component props

      * paginate
         Paginate prop will accept predefined values and determines number of items displayed per page. If ptop is not included, data will be displayed without pagination.

      * columns
         This prop accepts columns schema object. Columns schema is defined in `DataGridColumn` interface

      * custom
         If we want to add a custom cell to the table we can do so by passing object to a custom prop. Object key should be property key of a cell we would like to change. Value should be a function which accepts cell value as a first argument and returns JSX element.
         If property is not defined in custom object default cell will be renered.

## Linting and formatting

Project is using eslint and prettier combination for code quality.

```
npm run lint
npm run format
```

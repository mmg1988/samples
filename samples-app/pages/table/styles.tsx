import styled from '@emotion/styled';

export const TableContainer = styled.div`
  --table-background: rgb(255, 255, 255);
  --border-radius: 6px;
  --border-color: rgba(0, 0, 0, 0.15);
  --border-style: 1px solid var(--border-color);
  --hover-color: rgba(0, 0, 0, 0.04);
  background: var(--table-background);
  color: rgba(0, 0, 0, 0.73);
  border-radius: var(--border-radius);
  border: var(--border-style);
  overflow: auto;

  table {
    text-align: left;
    border-spacing: 0;
    width: 100%;
    font-size: 0.875em;
  }

  tr {
    background: var(--table-background);
  }

  th {
    background: var(--table-background);
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  th, td {
    padding: 1em;
    border-bottom: var(--border-style);
    white-space: nowrap;
  }

  tr th:first-child {
    left: 0;
    z-index: 3;
  }

  tr td:first-child {
    background: var(--table-background);
    position: sticky;
    left: 0;
    z-index: 2;
  }

  tr:hover td {
    background: var(--hover-color);
  }
`;
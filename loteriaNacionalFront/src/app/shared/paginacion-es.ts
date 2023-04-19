import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

const getRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 van ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;
  const startPage = page + 1;

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  const endPage = Math.ceil(length / pageSize);

  return `Página ${page + 1} de  ${endPage}`;
};

export function getSpanishPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = "Items por pagina:";
  paginatorIntl.nextPageLabel = "Anterior";
  paginatorIntl.previousPageLabel = "Siguiente";
  paginatorIntl.getRangeLabel = getRangeLabel;

  return paginatorIntl;
}

import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";

const getRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 van ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;
  const startPage = page + 1;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  const endPage = Math.ceil(length / pageSize);

  //return `${startIndex + 1} - ${endIndex} de ${length}`;
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

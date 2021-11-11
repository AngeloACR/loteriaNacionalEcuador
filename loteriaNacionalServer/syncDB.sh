#!/bin/bash

now=$(date)

mongoexport --collection=ganadoreswebs --db=loteriaDB --out="/home/loterianacional/respaldoDB/ganadoresweb-${now}.json"
mongoexport --collection=premios --db=loteriaDB --out="/home/loterianacional/respaldoDB/premios-${now}.json"
mongoexport --collection=resultadoloterias --db=loteriaDB --out="/home/loterianacional/respaldoDB/resultadoloterias-${now}.json"
mongoexport --collection=resultadolottos --db=loteriaDB --out="/home/loterianacional/respaldoDB/resultadolottos-${now}.json"
mongoexport --collection=resultadopozos --db=loteriaDB --out="/home/loterianacional/respaldoDB/resultadopozos-${now}.json"
mongoexport --collection=ventas --db=loteriaDB --out="/home/loterianacional/respaldoDB/ventas-${now}.json"
mongoexport --collection=resultados --db=loteriaDB --out="/home/loterianacional/respaldoDB/resultados-${now}.json"
mongoexport --collection=sorteos --db=loteriaDB --out="/home/loterianacional/respaldoDB/sorteos-${now}.json"
mongoexport --collection=ultimoresultados --db=loteriaDB --out="/home/loterianacional/respaldoDB/ultimoresultados-${now}.json"

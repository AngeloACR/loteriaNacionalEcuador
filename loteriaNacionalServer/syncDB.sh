#!/bin/bash

now=$(date)

mongoexport --collection=ganadoreswebs --db=loteriaDB --out=/home/loterianacional/respladoDB/"ganadoresweb-${now}".json
mongoexport --collection=premios --db=loteriaDB --out=/home/loterianacional/respladoDB/"premios-${now}".json
mongoexport --collection=resultadoloterias --db=loteriaDB --out=/home/loterianacional/respladoDB/"resultadoloterias-${now}".json
mongoexport --collection=resultadolottos --db=loteriaDB --out=/home/loterianacional/respladoDB/"resultadolottos-${now}".json
mongoexport --collection=resultadopozos --db=loteriaDB --out=/home/loterianacional/respladoDB/"resultadopozos-${now}".json
mongoexport --collection=ventas --db=loteriaDB --out=/home/loterianacional/respladoDB/"ventas-${now}".json
mongoexport --collection=resultados --db=loteriaDB --out=/home/loterianacional/respladoDB/"resultados-${now}".json
mongoexport --collection=sorteos --db=loteriaDB --out=/home/loterianacional/respladoDB/"sorteos-${now}".json
mongoexport --collection=ultimoresultados --db=loteriaDB --out=/home/loterianacional/respladoDB/"ultimoresultados-${now}".json

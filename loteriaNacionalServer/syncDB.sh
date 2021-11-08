#!/bin/bash

now=$(date)

mongoexport --collection=ganadoreswebs --db=loteriaDB --out=ganadoresweb-$(now).json
mongoexport --collection=premios --db=loteriaDB --out=premios-$(now).json
mongoexport --collection=resultadoloterias --db=loteriaDB --out=resultadoloterias-$(now).json
mongoexport --collection=resultadolottos --db=loteriaDB --out=resultadolottos-$(now).json
mongoexport --collection=resultadopozos --db=loteriaDB --out=resultadopozos-$(now).json
mongoexport --collection=resultados --db=loteriaDB --out=resultados-$(now).json
mongoexport --collection=sorteos --db=loteriaDB --out=sorteos-$(now).json
mongoexport --collection=ultimoresultados --db=loteriaDB --out=ultimoresultados-$(now).json
mongoexport --collection=ventas --db=loteriaDB --out=ventas-$(now).json

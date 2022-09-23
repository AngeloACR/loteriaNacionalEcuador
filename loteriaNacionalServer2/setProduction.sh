#!/bin/bash
find . -type f -exec sed -i 's/environments\/local/environments\/production/g' {} \;
find . -type f -exec sed -i 's/environments\/test/environments\/production/g' {} \;
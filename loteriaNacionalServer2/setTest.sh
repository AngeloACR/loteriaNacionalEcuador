#!/bin/bash
find . -type f -exec sed -i 's/environments\/local/environments\/test/g' {} \;
find . -type f -exec sed -i 's/environments\/production/environments\/test/g' {} \;
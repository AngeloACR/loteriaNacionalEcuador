#!/bin/bash
find . -type f -exec sed -i 's/environments\/test/environments\/local/g' {} \;
find . -type f -exec sed -i 's/environments\/production/environments\/local/g' {} \;
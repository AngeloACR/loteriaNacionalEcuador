#!/bin/bash
find . -type f -exec sed -i 's/environments\/local/environments\/test/g' {} \;
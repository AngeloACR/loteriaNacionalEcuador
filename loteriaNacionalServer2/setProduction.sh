#!/bin/bash
find . -type f -exec sed -i 's/environments\/test/environments\/production/g' {} \;
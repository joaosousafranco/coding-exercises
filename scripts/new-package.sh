#!/bin/bash

set -euo pipefail

package_name=$1

script_dir=$(dirname "$(pwd)/$0")

# shellcheck disable=SC2164
pushd "$script_dir" > /dev/null

cd ..

package_folder="packages/${package_name}"

cp -a "packages/template" "${package_folder}"

sed -i 's/template/hello/g' "${package_folder}/package.json"

npm run bootstrap

# shellcheck disable=SC2164
popd > /dev/null

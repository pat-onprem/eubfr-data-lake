#!/bin/sh

# Exit the script on any command with non 0 return code
set -ex

# Go to project root
cd "$(dirname "$0")"
cd ..

# Deploy storage first
cd ./services/storage/objects
./node_modules/.bin/serverless deploy -v

# Deploy signed uploads service
cd ../signed-uploads
./node_modules/.bin/serverless deploy -v

# Deploy storage meta index
cd ../meta-index
./node_modules/.bin/serverless deploy -v

# Deploy harmonized storage
cd ../../harmonized-storage
./node_modules/.bin/serverless deploy -v

# Deploy manager
cd ../ingestion/manager
./node_modules/.bin/serverless deploy -v

# Deploy cleaner
cd ../cleaner
./node_modules/.bin/serverless deploy -v

# Deploy ETL
cd ../etl/budg/csv
./node_modules/.bin/serverless deploy -v
cd ../xls
./node_modules/.bin/serverless deploy -v

# Deploy value store - projects
cd ../../../../value-store/projects
./node_modules/.bin/serverless deploy -v
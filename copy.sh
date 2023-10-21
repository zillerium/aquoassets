#!/bin/bash

# Define the source directory
src_dir="/home/ubuntu/aquolink"

# Define the directories to be copied
dirs=("components" "lib" "pages" "public" "styles" "wagmi")

# Loop through each directory and perform the operations
for dir in "${dirs[@]}"; do
    # Remove the existing directory
    rm -rf $dir
    # Copy the directory from the source
    cp -r $src_dir/$dir .
done


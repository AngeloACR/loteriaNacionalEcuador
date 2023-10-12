#!/bin/bash

# Loop through all PNG files in the current directory
for file in *.png; do
  # Convert the image to WebP format using FFmpeg
  ffmpeg -i "$file" -vf scale=120:-1 "${file%.png}_resized.png"
  mv "${file%.png}_resized.png" "$file"
  ffmpeg -i "$file" "${file%.png}.webp"

  echo "Converted $file to WebP"
done
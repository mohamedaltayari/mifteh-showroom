#!/bin/bash
cd "$(dirname "$0")"
if ! command -v python3 >/dev/null; then
  echo "Python is not installed. Install it from https://www.python.org/downloads/"
  read -p "Press Enter to close"; exit 1
fi
python3 -m pip install --disable-pip-version-check -q -r requirements.txt || { read -p "Install failed. Press Enter"; exit 1; }
(sleep 3; open http://localhost:8000) &
echo "System is running: http://localhost:8000  (keep this window open)"
python3 run.py

#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/docs"

echo ""
echo "============================================"
echo "  Rishta Ameen - Run on Mobile Chrome"
echo "============================================"
echo ""
echo "1. Connect your phone and PC to the SAME Wi-Fi"
echo "2. On your phone Chrome, open one of these URLs:"
echo ""

if command -v hostname >/dev/null 2>&1; then
  hostname -I 2>/dev/null | tr ' ' '\n' | while read -r ip; do
    [ -n "$ip" ] && echo "   http://${ip}:8080"
  done
fi

if command -v ipconfig >/dev/null 2>&1; then
  ipconfig getifaddr en0 2>/dev/null | while read -r ip; do
    [ -n "$ip" ] && echo "   http://${ip}:8080"
  done
fi

echo ""
echo "3. Keep this terminal open while testing"
echo ""
echo "Starting server on port 8080..."
echo ""

python3 -m http.server 8080 --bind 0.0.0.0

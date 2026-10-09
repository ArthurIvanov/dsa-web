#!/usr/bin/env bash
# Build the static site and rsync it to the NAS.
# Usage: npm run deploy:nas
set -euo pipefail

NAS_HOST="${NAS_HOST:-artur@192.168.1.30}"
NAS_DIR="${NAS_DIR:-/volume1/Docker/dsaweb}"
SSH_KEY="${SSH_KEY:-ssh-key-artur-2026092901/ssh-key-artur-2026092901.key}"

cd "$(dirname "$0")/.."
npm run build
rsync -avz --delete -e "ssh -i $SSH_KEY -o IdentitiesOnly=yes" out/ "$NAS_HOST:$NAS_DIR/site/"

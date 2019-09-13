#!/usr/bin/env bash

set -e
set -o pipefail
set -v

npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://b8b8e953.ngrok.io/pull/5d7b724effc0948170b95bd0
gatsby build

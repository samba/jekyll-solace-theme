#!/bin/sh

echo pwd: ${PWD}

bundle install || exit $?
bundle exec "$@"



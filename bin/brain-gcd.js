#!/usr/bin/env node
import brainGames from '../src/index.js';
import gcd from '../src/games/gcd.js';

brainGames(gcd, 'Find the greatest common divisor of given numbers.');

#!/usr/bin/env node

const waza = [
  'イナズマ落とし',
  '天空落とし',
  'ゴッドハンド',
  'まぼろしドリブル',
  'ファイヤートルネード',
  'ジ・アース'
];

console.log(waza[Math.ceil(Math.random() * 6) - 1]);
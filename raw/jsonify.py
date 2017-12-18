import json

def parse(fn, n): # chunk with generator
    lines = [line.strip() for line in open(fn + '.txt').readlines()]
    for x in range(0, len(lines), n): yield tuple(lines[x:x + n])

lines = [{'code': c, 'line': l, 'color': clr} for c, l, clr in parse('lines', 3)]

_stations = []

for l in lines:
    _stations += [(c, s, l) for c, s in parse(l['code'], 2)]
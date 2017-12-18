import json

def parse(fn, n): # chunk with generator
    lines = [line.strip() for line in open(fn + '.txt').readlines()]
    for x in range(0, len(lines), n): yield tuple(lines[x:x + n])
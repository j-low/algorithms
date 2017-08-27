import sys

class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

def uncovered_intervals(intervals, rangeMax):
    intervals = counting_sort(intervals, rangeMax)
    mergedInts = []
    uncovered = []

    for i, curInt in enumerate(intervals):
        if len(mergedInts) is 0:
            mergedInts.append(curInt)
        else:
            prevInt = mergedInts[-1]
            if curInt.start <= prevInt.end:
                if curInt.end > prevInt.end:
                    prevInt.end = curInt.end
            else:
                mergedInts.append(curInt)
                uncovered.append(Interval(prevInt.end, curInt.start))

    return uncovered


def counting_sort(arr, k):
    elCounts = [ [] ] * ( k + 1 )
    index = 0;

    for el in arr:
        if len(elCounts[el.start]) is 0:
            elCounts[el.start] = [el]
        else:
            elCounts[el.start].append(el)

    for i in range( len( elCounts ) ):
        while len(elCounts[i]) > 0:
            interval = elCounts[i].pop()
            arr[index] = interval
            index += 1

    return arr


def main():
    intervals = []
    rangeMax = 0

    for line in sys.stdin.readlines():
        if not line.strip():
            continue
        start, _, end = line.partition(' ')
        newInt = Interval(int(start), int(end))

        if newInt.start > rangeMax:
            rangeMax = newInt.start

        intervals.append(newInt)
    for interval in uncovered_intervals(intervals, rangeMax):
        print interval.start, interval.end

if __name__ == '__main__':
  main()

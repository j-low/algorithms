# Given two strings, write a method to decide if one is a permutation of the other.

# Qs to ask interviewer
## can I expect well-formed data?
## should the solution be case-sensitve?
## how should white-space be interpreted?
## are there any time or space restrictions that need to be considered?

def stringPermutations(a, b):
  if len(a) is not len(b):
    return False

  a = ''.join(sorted(a)).lower()
  b = ''.join(sorted(b)).lower()

  if a != b:
      return False

  return True

 # Notes: this solution is case-insensitve but treats white-spaceas valid chars (i.e. they will not be stripped)

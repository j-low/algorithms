# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

def uniqueChars(str):
    chars = {}

    for char in str:
        if char in chars.keys():
            return False
        else:
            chars[char] = char

    return True

def uniqueCharsNoDataStructures(str):
  str = ''.join(sorted(str))

  for i, char in enumerate(str):
    if char == str[i - 1]:
      return False

  return True

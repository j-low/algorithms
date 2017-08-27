# Implement a function which reverses a string.

# Qs to ask interviewer:
## can I expect well-formed data?
## how should non-string input be handled?
## are there any terminating characters? (i.e. like a null char in C++)
## should this be reversed in place? / are there any space restrictions that need to be considered?

def reverseString(string):
    if not isinstance(string, str):
        return 'Error: input is not of type str'

    rev = ''

    for i, char in enumerate(string[::-1]):
        rev += char

    return rev


 def reverseInPlace(string):
    if not isinstance(string, str):
        return 'Error: input is not of type str'

    string = [char for char in string]

    for i in range(0, len(string)/2):
        string[i], string[len(string) - i - 1] = string[len(string) - i - 1], string[i]

    string = ''.join(string)
    return string

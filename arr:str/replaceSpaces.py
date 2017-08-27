# Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end of the string to hold the additional characters, and that you are given the "true" length of the string.

# Qs for interviewer
## can I expect well-formed input?
## are there any time or space restrictions that need to be considered?
## will there be leading or trailing spaces that need to be handled?

def replaceSpaces(string):
    chars = []
    for char in string:
        if char == ' ':
            chars.append('%20')
        else:
            chars.append(char)

    string = ''.join(chars)
    return string

def replaceSpacesInSpace(string):
    string = [char for char in string]

    for i, char in enumerate(string):
        if char is ' ':
            string[i] = '%20'

    string = ''.join(string)
    return string

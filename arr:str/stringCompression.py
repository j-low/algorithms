# Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string.

# Qs for interviewer
## will strings be composed solely of letters?  Will it include numbers or symbols?
## how should spaces be handled?
## will input be well-formed?

def compressString(string):
    if len(string) is 0:
        return string

        compressed = []
        count = 1
        i = 0
        char = string[0]

        while i < len(string):
            if i + 1 == len(string):
                compressed.append(char + str(count))
                i += 1
        elif string[i + 1] == char:
            count += 1
            i += 1
        else:
            compressed.append(char + str(count))
            char = string[i + 1]
            count = 1
            i += 1

        compressed = ''.join(compressed)

        if len(compressed) < len(string):
            string = compressed

        return string

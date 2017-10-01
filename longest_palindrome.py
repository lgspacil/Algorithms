string = "What is the longest palindrome yo racecar oy"

def palindrom(str):
	if str == str[::-1]:
		return True
	else:
		return False





def palindromes(text):
	i = 0
	j = 0
	while i < len(text):

		print "The word is now: " + text[i:len(text)-j]

		if palindrom(text[i:len(text)-j]):
			return text[i:len(text)-j]

		print type(i)
		
		if i % 2 == 0:
			i += 1
		
		if i % 2 != 0:
			j += 1


print palindromes(string)

# def palindromes(text):
#     text = text.lower()
#     results = []

#     for i in range(len(text)):
#         for j in range(0, i):
#             chunk = text[j:i + 1]

#             if chunk == chunk[::-1]:
#                 results.append(chunk)

#     return text.index(max(results, key=len)), results


# print palindromes(string)
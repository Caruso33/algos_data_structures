"""
Read file into texts and calls.
It's ok if you don't understand how to read files.
"""
import csv
with open('texts.csv', 'r') as f:
    reader = csv.reader(f)
    texts = list(reader)

with open('calls.csv', 'r') as f:
    reader = csv.reader(f)
    calls = list(reader)


"""
TASK 1:
How many different telephone numbers are there in the records? 
Print a message:
"There are <count> different telephone numbers in the records."
"""


def add_numbers(file: list, tel_numbers: set) -> set:
    """
    Given a file adds all available numbers into a set
    :param file: file containing telephone numbers
    :param tel_numbers: variable used to contain the telephone numbers
    :return: tel_numbers with file numbers extracted
    """
    pass


if __name__ == '__main__':
    pass
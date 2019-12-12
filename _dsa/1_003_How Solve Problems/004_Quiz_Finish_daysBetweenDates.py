# Credit goes to Websten from forums
#
# Use Dave's suggestions to finish your daysBetweenDates
# procedure. It will need to take into account leap years
# in addition to the correct number of days in each month.

def isLeapYear(year):
    """Given a year returns True if it's a leap year, else False"""
    pass


def daysInMonth(year, month):
    """
    Given a month, returns the number of days it has.
    Takes into consideration leap years.
    """
    pass


def nextDay(year, month, day):
    """Simple version: assume every month has 30 days"""
    pass


def equal_dates(year1, month1, day1, year2, month2, day2):
    """ Checks if two dates are equal or not"""
    pass

def dateIsBefore(year1, month1, day1, year2, month2, day2):
    """Returns True if year1-month1-day1 is before
       year2-month2-day2. Otherwise, returns False."""
    pass


def daysBetweenDates(year1, month1, day1, year2, month2, day2):
    """Returns the number of days between year1/month1/day1
       and year2/month2/day2. Assumes inputs are valid dates
       in Gregorian calendar, and the first date is not after
       the second."""

    pass

    assert not dateIsBefore(year2, month2, day2, year1, month1, day1)


def test():
    test_cases = [((2012, 1, 1, 2012, 2, 28), 58),
                  ((2012, 1, 1, 2012, 3, 1), 60),
                  ((2011, 6, 30, 2012, 6, 30), 366),
                  ((2011, 1, 1, 2012, 8, 8), 585),
                  ((1900, 1, 1, 1999, 12, 31), 36523)]

    # for (args, answer) in test_cases:
    #     result = daysBetweenDates(*args)
    #     if result != answer:
    #         print("Test with data:", args, "failed")
    #     else:
    #         print("Test case passed!")


test()
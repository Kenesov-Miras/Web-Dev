import calendar

month, day, year = map(int, input().split())

d = calendar.weekday(year, month, day)

days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]

print(days[d])
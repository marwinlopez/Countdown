import pytest

def get_list(list):
	month_dic = {}
	for valor in list:
		valor2 = set_year_month_day(valor)
		year_dic = dic_year.get(valor2[0],False)
		if not year_dic:
			initial_dic_year(valor2[0],valor2[1],valor2[2])
		else:
			month_dic = dic_year.get(valor2[0])
			month = month_dic.get(valor2[1],False)
			if month:
				list_day = month_dic[valor2[1]]
				for list_day2 in list_day:
					if list_day2 != valor2[2]:
						list_day.append(valor2[2])
				month_dic[valor2[1]] = list_day
			else:
				dic_month = initial_dic_month(valor2[1],valor2[2])
				month_dic.update(dic_month)
				dic_month[valor2[0]] = month_dic

def set_year_month_day(valor):
	return valor[0:4],valor[4:6],valor[6:8]

def initial_dic_year(year,month,day):
	dic_month = initial_dic_month
	dic_year[year] = dic_month(month,day)

def initial_dic_month(month,day):
	dic_month={}
	list_days = [day]
	dic_month[month] = [day]
	return dic_month

dic_year = {}
list_year = ["20160101","20160403","20160213","20160123","20170110"]
get_list(list_year)
print(dic_year)
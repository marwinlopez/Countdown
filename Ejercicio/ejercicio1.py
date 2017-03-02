year = {
}
month = {
	
}
day = []


list = ["20170101","20170102","20170303"]

for fecha in list:
	#buscamos el anio
	if year.has_key(fecha[0:4]):
		month2 = year.values()
		for lista in month2:
			if (lista.has_key(fecha[4:6])):
				day.append(fecha[6:8])
				lista[fecha[4:6]]=day
				year[fecha[0:4]]=lista
			else:
				day2 = []

				day2.append(fecha[6:8])
				lista[fecha[4:6]]=day2
				year[fecha[0:4]]=lista
	else:
		day.append(fecha[6:8])
		month[fecha[4:6]]=day
		year[fecha[0:4]]=month

		

print year

from datetime import datetime, date, time, timedelta
year = {
}
month = {
	
}
day = []

list = ["20170201","20170202","20170203"]

print day

for fecha in list:
	print fecha[0:4]," ",fecha[4:6]," ",fecha[6:8]
	if year.has_key(fecha[0:4]):
		#month = dict.item(fecha[0:4])
		print month
	else:
		if month.has_key(fecha[4:6]):
			print "mes existe"
		else:
			if fecha[6:8] in day:
				print "verdadero"
			else:
				day.append(fecha[6:8])
			month[fecha[4:6]]=day
		year[fecha[0:4]]=month



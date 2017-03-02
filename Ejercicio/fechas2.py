anio = {
}

list = ["20160101","20160103","20160113"]

def crearAnio(fecha):
	if anio.has_key(fecha[0:4]):
		crearMesDia(fecha)
	else:
		anio2 = []
		anio2.append(fecha[6:8])
		mes = {}
		mes[fecha[4:6]]=anio2
		anio[fecha[0:4]]=mes

def crearMesDia(fecha):
	fecha1 = anio[fecha[0:4]]
	if fecha1.has_key(fecha[4:6]):
		lista = fecha1[fecha[4:6]]
		lista.append(fecha[6:8])
		fecha1[fecha[4:6]]=lista
		anio[fecha[0:4]]=fecha1
	else:
		lista = []
		lista.append(fecha[6:8])
		fecha1[fecha[4:6]]=lista
		anio[fecha[0:4]]=fecha1


for l in list:
	#crearAnio(fecha)
	print fecha
#lista.extend(lista2)
if not mes2:
	list_dia = [fecha[6:8]] 
	year[fecha[4:6]] = list_dia
else:
	mes2.append(fecha[6:8])
	mes = set_diccionario_mes(fecha[4:6],mes2)
set_diccionario_anno(fecha[0:4],mes)
export function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

export function randomNumberWhithSteps(stepsNum, step, min) {
	return Math.floor(Math.random() * stepsNum) * step + min;
}

export const complains = (diagnos) => {
	switch (diagnos) {
		case 'ЭКХ':
			return 'на отверстия в коже в области копчика, с периодически появляющимся гнойным отделяемым';
		case 'Хроническая анальная трещина':
			return 'на боли в анальном канале при дефекации, следы крови в стуле и на туалетной бумаге';
		case 'Хронический комбинированный геморрой 3 ст':
			return 'Кровь в стуле, выпадение геморроидальных узлов требующее ручного пособия при вправлении';
		case 'Хронический комбинированный геморрой 4 ст':
			return 'Кровь в стуле, невправимое выпадение геморроидальных узлов при дефекации';
		case 'Хронический комбинированный геморрой 2 ст':
			return 'Кровь в стуле, выпадение геморроидальных узлов, вправляющееся самостоятельно';
		case 'Полный, экстрасфинктерный свищ прямой кишки':
			return 'отверстие в перианальной области с гнойным отделяемым';
		case 'Полный, транссфинктерный свищ прямой кишки':
			return 'отверстие в перианальной области с гнойным отделяемым';
		case 'Полный, интрасфинктерный свищ прямой кишки':
			return 'отверстие в перианальной области с гнойным отделяемым';
		case 'Неполный внутренний свищ прямой кишки':
			return 'выделение гноя из анального канала, периодические боли в перианальной области';
		case 'Полип анального канала':
			return 'наличие полипа в анальном канале, выпадающего при дефекации';
		default:
			return '';
	}
}

export const statusLocalis = (diagnos, svischOut = null, svischIn = null, polipX = null, polipY = null) => {
	switch (diagnos) {
		case 'ЭКХ':
			return 'в области межьягодичной складки первичные и вторичные отверстия ЭКХ с серозно-гнойным' +
				' отделяемым. Перианальная область не изменена, сфинтктер в нормотонусе, на 3, 7, 11 часов' +
				' не выраженные геморроидальные узлы. На высоте 6 см без дополнительной патологи';
		case 'Хроническая анальная трещина':
			return 'Перианальная область не изменена, сфинтктер в нормотонусе, ' +
				'на 3, 7, 11 часов геморроидальные узлы в анальном канале дефект с грубыми краями, с' +
				' наружным и внутренним сторожевым бугорками. На высоте 6 см без дополнительной патологи';
		case 'Хронический комбинированный геморрой 3 ст':
			return `Перианальная область не изменена, сфинтктер в нормотонусе,` +
				` на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(1, 8)}см` +
				`На высоте 6 см без дополнительной патологи`;
		case 'Хронический комбинированный геморрой 4 ст':
			return `Перианальная область не изменена, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(4, 9)}см
				 На высоте 6 см без дополнительной патологи`;
		case 'Хронический комбинированный геморрой 2 ст':
			return `Перианальная область не изменена, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов выраженные геморроидальные узлы с наружным и внутренним компонентом до 1,${randomNumber(1, 6)}см 
				На высоте 6 см без дополнительной патологи`;
		case 'Полный, экстрасфинктерный свищ прямой кишки':
			return `В перианальной области свищевое отверстие на ${svischOut} часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ${svischIn} часах`;
		case 'Полный, транссфинктерный свищ прямой кишки':
			return `В перианальной области свищевое отверстие на ${svischOut} часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ${svischIn} часах`;
		case 'Полный, интрасфинктерный свищ прямой кишки':
			return `В перианальной области свищевое отверстие на ${svischOut} часах, сфинтктер в нормотонусе, 
				на 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				 На высоте 6 см без дополнительной патологи. Внутреннее отверстие свища на ${svischIn} часах`;
		case 'Неполный внутренний свищ прямой кишки':
			return `Перианальная область не изменена, сфинктер в нормотонусе. 
				На 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				На высоте 6 см без дополнительной патологи`;
		case 'Полип анального канала':
			return `Перианальная область не изменена, сфинктер в нормотонусе. 
				На 3, 7, 11 часов не выраженные геморроидальные узлы с наружным и внутренним компонентом до 0,${randomNumber(3, 7)}см
				На высоте ${polipX} часах полип размером  ${polipY} см`;
		default:
			return '';
	}
}

export const opisanieOperacii = (diagnoz, svischOut = null, svischIn = null, polipX = null, polipY = null) => {
	switch (diagnoz) {
		case 'ЭКХ':
			return `В межьягодичной складке первичные и вторичные отверстия ЭКХ. 
			  Ходы прокрашены бриллиантовым зеленым. Иссечен лоскут кожи с подкожной
			  клетчаткой вместе со всеми ходами, затеками, в пределах здоровых тканей.
			  Рана ушита от дна  узловыми швами, викрилом 2-0, с оставлением кожной раны.
			  Гемостаз  электрокоагулятором — удовлетворительный. Н2О2. 
			  Контроль гемостаза – сухо. Тампон с мазью в рану. Йод. Спирт.
			  Асептическая повязка. Препарат на гистологию. \n Кровопотеря 10 мл. \n Препарат: лоскут кожи с ЭКХ.`;
		case 'Хроническая задняя анальная трещина':
			return 'Девульсия ануса ректальным зеркалом, сфинктр спазмирован.  На 6  часов хроническая анальная трещина ' +
				'с грубыми краями, внутренними сторожевым бугорком. Трещина иссечена полулунным разрезом' +
				' электрокоагулятором. В связи со спазмом анального сфинктера выполнена ' +
				'открытая дозированная сфинктеротомия на 6 часах. Гемостаз — удовлетворительный.\n' +
				'Обработка перекисью водорода 3%. \n Анальный канал свободно проходим. \n' +
				'Контроль гемостаза — сухо. В анальном канале оставлена гемостатическая губка. Асептическая повязка. ' +
				'Препарат на гистологию — слизистая анального канала с  трещиной.';
		case 'Хроническая передняя анальная трещина':
			return 'Девульсия ануса ректальным зеркалом, сфинктр спазмирован. На 12  часов хроническая анальная' +
				' трещина с грубыми краями, внутренними сторожевым бугорком. Трещина иссечена полулунным разрезом' +
				' электрокоагулятором. В связи со спазмом анального сфинктера выполнена ' +
				'открытая дозированная сфинктеротомия на 3 часах. Гемостаз — удовлетворительный.\n' +
				'Обработка перекисью водорода 3%. \n Анальный канал свободно проходим. \n' +
				'Контроль гемостаза — сухо. В анальном канале оставлена гемостатическая губка. Асептическая повязка. ' +
				'Препарат на гистологию — слизистая анального канала с  трещиной.';
		case 'Хронический комбинированный геморрой 3 ст':
			return `Девульсия ануса ректальным зеркалом. В анальном канале визуализируются наружные и выпавшие
			 внутренние геморроидальные узлы на 3, 7, 11 часах по условному циферблату с эррозиями, до 1,${randomNumber(1, 5)} см
			  в диаметре. Кожа 'семичасового' наружного узла на уровне белой линии захвачена зажимом типа Алис. 
			  Узел иссечен  с использованием электрокоагулятора, снаружи внутрь, до сосудистой ножки внутреннего 
			  геморроидального узла, на которую наложен мягкий зажим. Ножка под зажимом прошита кетгутом № 1, 
			  перевязана, пересечена. Узлы на 3 и 11 часах удалены аналогичным образом с оставлением мостиков
			  слизистой в анальном канале шириной более 1 см. Анальный канал свободно проходим.  
			  Обработка перекисью водорода 3 %. Контроль гемостаза — сухо. 
			  В анальном канале оставлена  гемостатическая губка. Асептическая повязка. 
			  Общая кровопотеря — ${randomNumberWhithSteps(3, 10, 10)} мл. Препараты на гистологию — геморроидальные узлы.`;
		case 'Хронический комбинированный геморрой 4 ст':
			return `Девульсия ануса ректальным зеркалом. В анальном канале визуализируются наружные и выпавшие
			 внутренние геморроидальные узлы на 3, 7, 11 часах по условному циферблату с эррозиями, до 1,${randomNumber(3, 9)} см
			  в диаметре. Кожа 'семичасового' наружного узла на уровне белой линии захвачена зажимом типа Алис. 
			  Узел иссечен  с использованием электрокоагулятора, снаружи внутрь, до сосудистой ножки внутреннего 
			  геморроидального узла, на которую наложен мягкий зажим. Ножка под зажимом прошита кетгутом № 1, 
			  перевязана, пересечена. Узлы на 3 и 11 часах удалены аналогичным образом с оставлением мостиков
			  слизистой в анальном канале шириной более 1 см. Анальный канал свободно проходим.  
			  Обработка перекисью водорода 3 %. Контроль гемостаза — сухо. 
			  В анальном канале оставлена  гемостатическая губка. Асептическая повязка. 
			  Общая кровопотеря — ${randomNumberWhithSteps(3, 10, 10)} мл. Препараты на гистологию — геморроидальные узлы.`;
		case 'Хронический комбинированный геморрой 2 ст':
			return `Девульсия ануса ректальным зеркалом. В анальном канале визуализируются наружные и выпавшие
			 внутренние геморроидальные узлы на 3, 7, 11 часах по условному циферблату с эррозиями, до 1,${randomNumber(1, 4)} см
			  в диаметре. Кожа 'семичасового' наружного узла на уровне белой линии захвачена зажимом типа Алис. 
			  Узел иссечен  с использованием электрокоагулятора, снаружи внутрь, до сосудистой ножки внутреннего 
			  геморроидального узла, на которую наложен мягкий зажим. Ножка под зажимом прошита кетгутом № 1, 
			  перевязана, пересечена. Узлы на 3 и 11 часах удалены аналогичным образом с оставлением мостиков
			  слизистой в анальном канале шириной более 1 см. Анальный канал свободно проходим.  
			  Обработка перекисью водорода 3 %. Контроль гемостаза — сухо. 
			  В анальном канале оставлена  гемостатическая губка. Асептическая повязка. 
			  Общая кровопотеря — ${randomNumberWhithSteps(3, 10, 5)} мл. Препараты на гистологию — геморроидальные узлы.`;
		case 'Полный, экстрасфинктерный свищ прямой кишки':
			return `
			На ${svischOut} часах по условному циферблату и на удалении ${randomNumber(3, 6)}, см от ануса,
			определяется наружное отверстие свища прямой кишки.
			В анальном канале на ${svischIn} часах внутреннее отверстие свища, с плотными рубцовыми краями,
			воронкообразной формы до 0,${randomNumber(3, 7)} см. Зонд проведен через эти отверстия. Ход свища широкий, расположен
			экстрасфинктерно (свищевой ход идет параллельно прямой кишке, затем, огибая анальный сфинктер дугообразно
			к просвету прямой кишки, открываясь в области анальной крипты на ${svischIn} часах).
			Свищ иссечен на зонде, грануляционная ткань удалена со всеми затеками в пределах здоровых тканей,
			Санация Н2О2.  Выделен полнослойный лоскут прямой кишки. Выполнена пластика внутреннего отверстия 
			свища прямой кишки полнослойным лоскутом прямой кишки. Лоскут фиксирован к сфинктеру и слизистой 
			узловыми швами викрилом 2-0. Рана в перианальной области тампонирована салфеткой с мазью левомеколь.
			Гемостаз электроскальпелем по ходу операции. Контроль гемостаза – сухо. Тампон с антибактериальной
			мазью левомеколь на раны в перианальной области, гемостатическая губка в анальный канал. 
			Асептическая повязка. Препарат — свищ прямой кишки.
			`;
		case 'Полный, транссфинктерный свищ прямой кишки':
			return `
			На ${svischOut} часах по условному циферблату и на удалении ${randomNumber(1, 4)}, см от ануса,
			определяется наружное отверстие свища прямой кишки.
			В анальном канале на ${svischIn} часах внутреннее отверстие свища, 
			воронкообразной формы до 0,${randomNumber(2, 4)} см. Зонд проведен через эти отверстия. Ход свища расположен
			транссфинктерно (свищевой ход идет через анальный сфиктер к крипте на ${svischIn} часах).
			Свищ иссечен на зонде, грануляционная ткань удалена со всеми затеками в пределах здоровых тканей,
			Санация Н2О2.  Рана в перианальной области тампонирована салфеткой с мазью левомеколь.
			Гемостаз электроскальпелем по ходу операции. Контроль гемостаза – сухо. Тампон с антибактериальной
			мазью левомеколь на раны в перианальной области, гемостатическая губка в анальный канал. 
			Асептическая повязка. Препарат — свищ прямой кишки.
			`;
		case 'Полный, интрасфинктерный свищ прямой кишки':
			return `
			На ${svischOut} часах по условному циферблату и на удалении ${randomNumber(1, 3)}, см от ануса,
			определяется наружное отверстие свища прямой кишки.
			В анальном канале на ${svischIn} часах внутреннее отверстие свища, 
			воронкообразной формы до 0,${randomNumber(1, 3)} см. Зонд проведен через эти отверстия. Ход свища  расположен
			интрасфинктерно (свищевой ход идет подслизисто, к крипте на ${svischIn} часах).
			Свищ иссечен на зонде, грануляционная ткань удалена со всеми затеками в пределах здоровых тканей,
			Санация Н2О2.  Рана в перианальной области тампонирована салфеткой с мазью левомеколь.
			Гемостаз электроскальпелем по ходу операции. Контроль гемостаза – сухо. Тампон с антибактериальной
			мазью левомеколь на рану в перианальной области, гемостатическая губка в анальный канал. 
			Асептическая повязка. Препарат — свищ прямой кишки.
			`;
		case 'Неполный внутренний свищ прямой кишки':
			return `
			На ${svischOut} часах по условному циферблату и на удалении ${randomNumber(1, 4)}, см от ануса,
			определяется инфильтрат.
			В анальном канале на ${svischIn} часах внутреннее отверстие свища, 
			воронкообразной формы до 0,${randomNumber(1, 3)} см. Зонд проведен через это отверстие. Ход свища  расположен
			транссфинктерно идёт к инфильтрату в перианальной области на ${svischOut} часах.
			Свищ иссечен на зонде, грануляционная ткань удалена со всеми затеками в пределах здоровых тканей,
			Санация Н2О2.  Рана в перианальной области тампонирована салфеткой с мазью левомеколь.
			Гемостаз электроскальпелем по ходу операции. Контроль гемостаза – сухо. Тампон с антибактериальной
			мазью левомеколь на рану в перианальной области, гемостатическая губка в анальный канал. 
			Асептическая повязка. Препарат — свищ прямой кишки.
			`;
		case 'Полип анального канала':
			return `Девульсия ануса ректальным зеркалом.  На ${polipX} часов полип на толстой ножке ${polipY}см в диаметре. 
			Полип иссечен в пределах здоровых тканей. Обработка перекисью водорода 3%. Анальный канал свободно проходим.
			Контроль гемостаза — сухо. В анальном канале оставлена  гемостатическая губка. Асептическая повязка.
			Общая кровопотеря — 5 мл. Препарат на гистологию — полип анального канала.`;
		default:
			return '///////////////////////******************///////////////////';
	}
}
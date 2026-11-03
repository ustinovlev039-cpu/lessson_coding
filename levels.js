export const chapters = [
  { name: 'Загрузка системы', short: 'Старт', icon: '▣', color: '#e8b354' },
  { name: 'Склад данных', short: 'Переменные', icon: '◆', color: '#92b996' },
  { name: 'Логический шлюз', short: 'Условия', icon: '◇', color: '#e48f78' },
  { name: 'Циклический цех', short: 'Циклы', icon: '↻', color: '#8aadd0' },
  { name: 'Мастерская команд', short: 'Функции', icon: '✳', color: '#b5a2cc' }
];

export const levels = [
  {chapter:0,title:'Первый сигнал',concept:'print()',story:'Старый компьютер оживает. Отправь в терминал его первое сообщение.',task:'Выведи ровно: Привет, мир!',hint:'Используй print("Привет, мир!")',starter:'print("Привет, мир!")',test:'assert output.strip() == "Привет, мир!", "В терминале должно появиться: Привет, мир!"'},
  {chapter:0,title:'Экран приветствия',concept:'строки',story:'На мониторе мигает курсор. Напечатай имя станции.',task:'Выведи строку PYTHON-90.',hint:'Строку заключают в кавычки: print("текст")',starter:'print("...")',test:'assert output.strip() == "PYTHON-90", "Ожидалась строка PYTHON-90"'},
  {chapter:0,title:'Счётчик загрузки',concept:'числа',story:'Диагностика просит вывести число активных модулей.',task:'Выведи число 8 с помощью print().',hint:'Число пишется без кавычек: print(8)',starter:'print( )',test:'assert output.strip() == "8", "Ожидалось число 8"'},
  {chapter:0,title:'Простая арифметика',concept:'операторы',story:'Контроллеру нужно посчитать число свободных ячеек.',task:'Выведи результат выражения 12 + 5, не вписывая готовый ответ.',hint:'Передай выражение прямо в print().',starter:'print(12 + )',test:'assert output.strip() == "17", "Результат должен быть 17"\nassert "12" in user_code and "+" in user_code and "5" in user_code, "Используй выражение 12 + 5"'},
  {chapter:1,title:'Имя оператора',concept:'переменная',story:'Терминал должен запомнить, кто вошёл в систему.',task:'Создай переменную operator со строкой "Пилот" и выведи её.',hint:'operator = "Пилот"; затем print(operator)',starter:'operator = ""\nprint(operator)',test:'assert scope.get("operator") == "Пилот", "Переменная operator должна хранить Пилот"\nassert output.strip() == "Пилот", "Выведи значение operator"'},
  {chapter:1,title:'Энергоблок',concept:'целые числа',story:'В блоке питания осталось 42 единицы энергии.',task:'Сохрани число 42 в переменной energy и выведи его.',hint:'energy = 42',starter:'energy = 0\nprint(energy)',test:'assert scope.get("energy") == 42 and type(scope.get("energy")) is int, "energy должна быть числом 42"\nassert output.strip() == "42", "Выведи energy"'},
  {chapter:1,title:'Перезарядка',concept:'изменение значения',story:'Тебе дали ещё 15 единиц энергии.',task:'Начни с energy = 20, прибавь 15 через переменную и выведи результат.',hint:'energy = energy + 15 или energy += 15',starter:'energy = 20\n# прибавь 15\nprint(energy)',test:'assert scope.get("energy") == 35, "После прибавления energy должно быть 35"\nassert output.strip() == "35", "Выведи новый запас энергии"\nassert "energy = 20" in user_code, "Начни с energy = 20"'},
  {chapter:1,title:'Позывной',concept:'соединение строк',story:'Система собирает табличку из двух фрагментов.',task:'Создай first = "ПИ" и second = "ТОН". Выведи их вместе без пробела.',hint:'print(first + second)',starter:'first = "ПИ"\nsecond = "ТОН"\nprint()',test:'assert scope.get("first") == "ПИ" and scope.get("second") == "ТОН", "Создай обе переменные"\nassert output.strip() == "ПИТОН", "Соедини две строки"'},
  {chapter:2,title:'Проверка доступа',concept:'if',story:'Дверь откроется только при верном коде.',task:'При code = 7 выведи "Открыто" с помощью if.',hint:'if code == 7:\n    print("Открыто")',starter:'code = 7\nif ...:\n    print("Открыто")',test:'assert output.strip() == "Открыто", "При коде 7 дверь должна открыться"\nassert "if" in user_code, "Используй условие if"'},
  {chapter:2,title:'Резервный вход',concept:'else',story:'Неверный код должен дать понятный ответ.',task:'С помощью if/else выведи "Закрыто" при code = 3, если верный код равен 7.',hint:'if code == 7: ... else: ...',starter:'code = 3\nif code == 7:\n    print("Открыто")\nelse:\n    print(...)',test:'assert output.strip() == "Закрыто", "При коде 3 ожидается Закрыто"\nassert "else" in user_code, "Используй else"'},
  {chapter:2,title:'Заряд батареи',concept:'сравнение',story:'Робот продолжит путь, если энергии хватит.',task:'Если battery = 18 больше или равно 10, выведи "В путь".',hint:'Используй оператор >=',starter:'battery = 18\nif battery >= ...:\n    print("В путь")',test:'assert output.strip() == "В путь", "Заряда достаточно"\nassert ">=" in user_code, "Используй сравнение >="'},
  {chapter:2,title:'Два датчика',concept:'and',story:'Шлюз открывается, когда оба датчика активны.',task:'При left = True и right = True выведи "Проход". Используй and.',hint:'if left and right:',starter:'left = True\nright = True\nif ...:\n    print("Проход")',test:'assert output.strip() == "Проход", "Оба датчика активны"\nassert "and" in user_code, "Соедини условия через and"'},
  {chapter:3,title:'Три импульса',concept:'for',story:'Передатчику нужны три коротких сигнала.',task:'Циклом for выведи слово "Пик" ровно три раза, каждое с новой строки.',hint:'for i in range(3):\n    print("Пик")',starter:'for i in range(...):\n    print("Пик")',test:'assert output.splitlines() == ["Пик"] * 3, "Нужно три строки Пик"\nassert "for" in user_code and "range" in user_code, "Используй for и range"'},
  {chapter:3,title:'Номера секторов',concept:'range()',story:'Сканер последовательно проверяет три сектора.',task:'Циклом выведи числа 1, 2, 3 по одному в строке.',hint:'range(1, 4) даёт 1, 2, 3.',starter:'for sector in range(...):\n    print(sector)',test:'assert output.splitlines() == ["1", "2", "3"], "Ожидаются строки 1, 2, 3"\nassert "for" in user_code, "Используй цикл"'},
  {chapter:3,title:'Обратный отсчёт',concept:'while',story:'Ракета готова к запуску.',task:'Создай count = 3 и с помощью while выведи 3, 2, 1.',hint:'Внутри while уменьши count на 1.',starter:'count = 3\nwhile count > 0:\n    print(count)\n    # уменьши count',test:'assert output.splitlines() == ["3", "2", "1"], "Ожидается обратный отсчёт 3, 2, 1"\nassert "while" in user_code, "Используй while"'},
  {chapter:3,title:'Сумма деталей',concept:'накопление',story:'Робот подсчитывает детали в трёх ящиках.',task:'Циклом просуммируй числа от 1 до 4 в total и выведи сумму.',hint:'total = 0; for n in range(1, 5): total += n',starter:'total = 0\nfor n in range(1, 5):\n    ...\nprint(total)',test:'assert scope.get("total") == 10, "total должен равняться 10"\nassert output.strip() == "10", "Выведи сумму"\nassert "for" in user_code, "Суммируй циклом"'},
  {chapter:4,title:'Своя команда',concept:'def',story:'Пора создать собственную команду для терминала.',task:'Напиши функцию greet(), которая выводит "Привет, пилот!". Затем вызови её.',hint:'def greet():\n    print("Привет, пилот!")',starter:'def greet():\n    ...\n\ngreet()',test:'assert callable(scope.get("greet")), "Нужна функция greet"\nassert output.strip() == "Привет, пилот!", "Вызови greet и выведи приветствие"'},
  {chapter:4,title:'Команда с именем',concept:'параметры',story:'Терминал обращается к каждому пилоту по имени.',task:'Напиши greet(name), которая выводит "Привет, " + имя. Вызови greet("Ада").',hint:'def greet(name):\n    print("Привет, " + name)',starter:'def greet(name):\n    ...\n\ngreet("Ада")',test:'assert output.strip() == "Привет, Ада", "Ожидается Привет, Ада"\nfn = scope.get("greet")\nassert callable(fn), "Нужна функция greet(name)"\nwith contextlib.redirect_stdout(io.StringIO()) as hidden: fn("Макс")\nassert hidden.getvalue().strip() == "Привет, Макс", "Функция должна работать с любым именем"'},
  {chapter:4,title:'Удвоитель',concept:'return',story:'Новый модуль усиливает входной сигнал вдвое.',task:'Напиши double(number), которая возвращает число, умноженное на 2. Выведи double(6).',hint:'Внутри функции: return number * 2',starter:'def double(number):\n    ...\n\nprint(double(6))',test:'fn = scope.get("double")\nassert callable(fn), "Нужна функция double(number)"\nassert fn(6) == 12 and fn(9) == 18, "Возвращай удвоенное значение для любого числа"\nassert output.strip() == "12", "Выведи double(6)"'},
  {chapter:4,title:'Финальный модуль',concept:'всё вместе',story:'Собери программу, которая рассчитает энергию для нескольких роботов.',task:'Напиши функцию charge(base, bonus), возвращающую сумму. Циклом выведи charge(10, i) для i от 1 до 3.',hint:'for i in range(1, 4): print(charge(10, i))',starter:'def charge(base, bonus):\n    ...\n\nfor i in range(1, 4):\n    print(...)',test:'fn = scope.get("charge")\nassert callable(fn) and fn(4, 7) == 11 and fn(0, 5) == 5, "charge должна возвращать сумму аргументов"\nassert output.splitlines() == ["11", "12", "13"], "Ожидаются строки 11, 12, 13"'}
];

export const lessons = [
  'print() показывает значение в терминале. Текст внутри кавычек называется строкой.',
  'Строка — это текст в кавычках. Python выводит её без самих кавычек.',
  'Числа записывают без кавычек. Поэтому с ними можно выполнять вычисления.',
  'Python вычисляет выражение перед выводом. Знаки +, -, * и / выполняют арифметику.',
  'Переменная хранит значение под именем. Знак = присваивает ей это значение.',
  'Тип int хранит целые числа. Переменную можно передать в print().',
  'Значение переменной можно менять. Запись energy += 15 сокращает energy = energy + 15.',
  'Оператор + соединяет строки в одну. Порядок частей имеет значение.',
  'if выполняет вложенный код, только если условие истинно. После условия ставится двоеточие.',
  'else выполняется, когда условие if ложно. Отступы показывают, какие строки относятся к ветке.',
  'Операторы сравнения возвращают True или False. >= значит «больше или равно».',
  'and делает общее условие истинным, только когда истинны обе его части.',
  'Цикл for повторяет вложенный код. range(3) создаёт три шага: 0, 1 и 2.',
  'range(1, 4) начинает с 1 и заканчивает перед 4.',
  'while повторяет код, пока условие истинно. Изменяй счётчик, чтобы цикл завершился.',
  'Сумму можно накапливать в переменной: на каждом шаге прибавлять очередное число.',
  'def создаёт функцию — команду, которую можно вызвать по имени. Тело функции пишется с отступом.',
  'Параметр получает значение при вызове функции. Так одна команда работает с разными данными.',
  'return возвращает результат функции. Его можно использовать в выражении или вывести.',
  'Функция может принимать несколько параметров. Цикл помогает вызвать её с разными значениями.'
];

const paronyms = [
	"Абонемент-абонент",
	"Артистический-артистичный",
	"Бедный-бедственный",
	"Безответный-безответственный",
	"Болотистый-болотный",
	"Благодарный-благодарственный",
	"Благотворительный-благотворный",
	"Бывший-былой",
	"Вдох-вздох",
	"Вековой-вечный",
	"Великий-величественный",
	"Восполнить-дополнить-заполнить-наполнить-переполнить-пополнить-заполнен-наполнен-переполнен",
	"Враждебный-вражеский",
	"Выбирать-избирать-выбирая-избирая",
	"Выгода-выгодность",
	"Выдача-отдача-передача-раздача",
	"Выплата-оплата-плата-уплата",
	"Выплатить-заплатить-оплатить-отплатить-уплатить",
	"Вырастить-нарастить-отрастить",
	"Выращивание-наращивание-отращивание",
	"Высокий-высотный",
	"Гарантийный-гарантированный",
	"Гармонический-гармоничный",
	"Глинистый-глиняный",
	"Годичный-годовалый-годовой",
	"Гордость-гордыня",
	"Гуманизм-гуманность",
	"Гуманистический-гуманитарный-гуманный",
	"Двоичный-двойной-двойственный-двоякий-сдвоенный-удвоенный",
	"Действенный-действительный-действующий",
	"Деловитый-деловой-дельный-деляческий",
	"Демократичный-демократический",
	"Диктант-диктат",
	"Дипломант-дипломат",
	"Дипломатический-дипломатичный",
	"Длинный-длительный",
	"Добротный-добрый",
	"Доверительный-доверчивый",
	"Дождевой-дождливый",
	"Драматический-драматичный",
	"Дружеский-дружественный-дружный",
	"Единичный-единственный",
	"Желанный-желательный",
	"Жестокий-жёсткий",
	"Жизненный-житейский",
	"Жилищный-жилой",
	"Загородить-огородить-оградить-отгородить-перегородить",
	"Занизить-понизить-снизить",
	"Зачинатель-зачинщик",
	"Звериный-зверский",
	"Звуковой-звучный",
	"Зрительный-зрительский",
	"Изобретательный-изобретательский",
	"Информативный-информационный",
	"Информация-информированность",
	"Иронический-ироничный",
	"Искусный-искусственный",
	"Исполнительный-исполнительский",
	"Исходный-исходящий",
	"Каменистый-каменный",
	"Комфортабельный-комфортный",
	"Конный-конский",
	"Коренастый-коренной-корневой",
	"Костный-костяной",
	"Красочный-красящий-крашеный",
	"Лакированный-лаковый",
	"Ледовый-ледяной",
	"Лесистый-лесной",
	"Личностный-личный",
	"Микроскопический-микроскопичный",
	"Мороженый-морозильный-морозный",
	"Надеть-одеть",
	"Наличие-наличность",
	"Напоминание-упоминание",
	"Невежа-невежда",
	"Нестерпимый-нетерпеливый-нетерпимый",
	"Неудачный-неудачливый",
	"Обвинённый-обвинительный",
	"Обрывок-отрывок",
	"Обхватить-охватить",
	"Ограничить-отграничить-разграничить",
	"Оклик-отклик",
	"Органический-органичный",
	"Отборный-отборочный",
	"Отклонение-уклонение",
	"Отклониться-уклониться",
	"Отличать-различать",
	"Отличие-различие",
	"Памятливый-памятный",
	"Перетерпеть-претерпеть",
	"Покупательный-покупательский-покупной",
	"Популистский-популярный",
	"Почтенный-почтительный-почётный",
	"Практический-практичный",
	"Предоставить-представить",
	"Представительный-представительский",
	"Признанный-признательный",
	"Продуктивный-продуктовый",
	"Производительность-производство",
	"Производительный-производственный",
	"Просветительский-просвещённый",
	"Публицистический-публицистичный",
	"Пугливый-пуганый",
	"Раздражение-раздражительность",
	"Ритмический-ритмичный",
	"Романтический-романтичный",
	"Скрытный-скрытый",
	"Словарный-словесный",
	"Сопротивление-сопротивляемость",
	"Соседний-соседский",
	"Сравнимый-сравнительный",
	"Сценический-сценичный",
	"Технический-техничный",
	"Удачливый-удачный",
	"Униженный-унизительный",
	"Фактический-фактичный",
	"Хищнический-хищный",
	"Царский-царственный-царствующий",
	"Целый-цельный-целостный",
	"Экономический-экономичный-экономный",
	"Эстетический-эстетичный",
	"Этический-этичный",
	"Эффективный-эффектный",
	"Эффективность-эффектность",
]
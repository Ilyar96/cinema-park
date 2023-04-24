import { ISelectOption } from "@/components/ui/select/Select.type";
import { formatBytes } from "../helpers/formatBytes";
import { AppRoutes } from "./routes";
import { getCurrentYear } from "../helpers/getCurrentYear";
import { Filter } from "@/@types/query";

// Meta
export const SITE_NAME = "Cinema Park";
export const TITLE_SEPARATOR = "|";

//Firebase
export const USERS_COLLECTION_PATH = "users";
export const COMMENTS_COLLECTION_PATH = "comments";

//Register Form image
export const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const FILE_SIZE = 2100000;

// Error messages
const REQUIRED_MESSAGE = "Заполните обязательное поле";

export const errorMessages = {
	required: REQUIRED_MESSAGE,
	name: {
		length: { value: 2, message: "Минимальная длина пароля 2 символов" },
	},
	comment: {
		length: { value: 20, message: "Минимальное количество символов 20" },
	},
	email: "Введите валидный email",
	password: {
		min: { value: 8, message: "Минимальная длина пароля 8 символов" },
		minLowercase: {
			value: 1,
			message: "Минимум один символ в нижнем регистре",
		},
		minUppercase: {
			value: 1,
			message: "Минимум один символ в верхнем регистре",
		},
		minNumbers: { value: 1, message: "Минимум одно число" },
		space: "Пробелы недопустимы",
	},
	avatar: {
		size: `Размер файла не должен превышать ${formatBytes(FILE_SIZE)}`,
		format: "Поддерживаемые форматы: jpg, jpeg, png",
	},
};

// Api routes
export const enum ApiRoute {
	MOVIE = "movie",
	IMAGE = "image",
}

// Breadcrumb links
export const breadcrumbLinks = {
	films: { href: AppRoutes.FILMS, title: "Фильмы" },
};

//Homepage initial filters
export const filmFilters: Filter = {
	limit: 12,
	year: `${getCurrentYear() - 1}-${getCurrentYear()}`,
	type: "movie",
};

export const cartoonsFilters: Filter = {
	limit: 12,
	year: `${getCurrentYear() - 1}-${getCurrentYear()}`,
	type: "cartoon",
};

export const animeFilters: Filter = {
	limit: 12,
	year: `${getCurrentYear() - 1}-${getCurrentYear()}`,
	type: "anime",
};

//Comments
export const COMMENTS_PER_PAGE = 10;

//Cookie keys
export const COOKIE_USER_ID_KEY = "user_id";

// Film gallery
export const GALLERY_LENGTH = 20;

// Select options
export const genreOptions: ISelectOption[] = [
	{
		value: "",
		label: "Не выбрано",
	},
	{
		value: "аниме",
		label: "аниме",
	},
	{
		value: "биография",
		label: "биография",
	},
	{
		value: "боевик",
		label: "боевик",
	},
	{
		value: "вестерн",
		label: "вестерн",
	},
	{
		value: "военный",
		label: "военный",
	},
	{
		value: "детектив",
		label: "детектив",
	},
	{
		value: "детский",
		label: "детский",
	},
	{
		value: "для взрослых",
		label: "для взрослых",
	},
	{
		value: "документальный",
		label: "документальный",
	},
	{
		value: "драма",
		label: "драма",
	},
	{
		value: "игра",
		label: "игра",
	},
	{
		value: "история",
		label: "история",
	},
	{
		value: "комедия",
		label: "комедия",
	},
	{
		value: "концерт",
		label: "концерт",
	},
	{
		value: "короткометражка",
		label: "короткометражка",
	},
	{
		value: "криминал",
		label: "криминал",
	},
	{
		value: "мелодрама",
		label: "мелодрама",
	},
	{
		value: "музыка",
		label: "музыка",
	},
	{
		value: "мультфильм",
		label: "мультфильм",
	},
	{
		value: "мюзикл",
		label: "мюзикл",
	},
	{
		value: "новости",
		label: "новости",
	},
	{
		value: "приключения",
		label: "приключения",
	},
	{
		value: "реальное ТВ",
		label: "реальное ТВ",
	},
	{
		value: "семейный",
		label: "семейный",
	},
	{
		value: "спорт",
		label: "спорт",
	},
	{
		value: "ток-шоу",
		label: "ток-шоу",
	},
	{
		value: "триллер",
		label: "триллер",
	},
	{
		value: "ужасы",
		label: "ужасы",
	},
	{
		value: "фантастика",
		label: "фантастика",
	},
	{
		value: "фильм-нуар",
		label: "фильм-нуар",
	},
	{
		value: "фэнтези",
		label: "фэнтези",
	},
	{
		value: "церемония",
		label: "церемония",
	},
];

export const countryOptions: ISelectOption[] = [
	{
		value: "",
		label: "Не выбрано",
	},
	{
		value: "Австралия",
		label: "Австралия",
	},
	{
		value: "Австрия",
		label: "Австрия",
	},
	{
		value: "Азербайджан",
		label: "Азербайджан",
	},
	{
		value: "Албания",
		label: "Албания",
	},
	{
		value: "Алжир",
		label: "Алжир",
	},
	{
		value: "Американские Виргинские острова",
		label: "Американские Виргинские острова",
	},
	{
		value: "Американское Самоа",
		label: "Американское Самоа",
	},
	{
		value: "Ангола",
		label: "Ангола",
	},
	{
		value: "Андорра",
		label: "Андорра",
	},
	{
		value: "Антарктида",
		label: "Антарктида",
	},
	{
		value: "Антигуа и Барбуда",
		label: "Антигуа и Барбуда",
	},
	{
		value: "Антильские Острова",
		label: "Антильские Острова",
	},
	{
		value: "Аргентина",
		label: "Аргентина",
	},
	{
		value: "Армения",
		label: "Армения",
	},
	{
		value: "Аруба",
		label: "Аруба",
	},
	{
		value: "Афганистан",
		label: "Афганистан",
	},
	{
		value: "Багамы",
		label: "Багамы",
	},
	{
		value: "Бангладеш",
		label: "Бангладеш",
	},
	{
		value: "Барбадос",
		label: "Барбадос",
	},
	{
		value: "Бахрейн",
		label: "Бахрейн",
	},
	{
		value: "Беларусь",
		label: "Беларусь",
	},
	{
		value: "Белиз",
		label: "Белиз",
	},
	{
		value: "Бельгия",
		label: "Бельгия",
	},
	{
		value: "Бенин",
		label: "Бенин",
	},
	{
		value: "Берег Слоновой кости",
		label: "Берег Слоновой кости",
	},
	{
		value: "Бермуды",
		label: "Бермуды",
	},
	{
		value: "Бирма",
		label: "Бирма",
	},
	{
		value: "Болгария",
		label: "Болгария",
	},
	{
		value: "Боливия",
		label: "Боливия",
	},
	{
		value: "Босния",
		label: "Босния",
	},
	{
		value: "Босния и Герцеговина",
		label: "Босния и Герцеговина",
	},
	{
		value: "Ботсвана",
		label: "Ботсвана",
	},
	{
		value: "Бразилия",
		label: "Бразилия",
	},
	{
		value: "Бруней-Даруссалам",
		label: "Бруней-Даруссалам",
	},
	{
		value: "Буркина-Фасо",
		label: "Буркина-Фасо",
	},
	{
		value: "Бурунди",
		label: "Бурунди",
	},
	{
		value: "Бутан",
		label: "Бутан",
	},
	{
		value: "Вануату",
		label: "Вануату",
	},
	{
		value: "Ватикан",
		label: "Ватикан",
	},
	{
		value: "Великобритания",
		label: "Великобритания",
	},
	{
		value: "Венгрия",
		label: "Венгрия",
	},
	{
		value: "Венесуэла",
		label: "Венесуэла",
	},
	{
		value: "Виргинские Острова",
		label: "Виргинские Острова",
	},
	{
		value: "Внешние малые острова США",
		label: "Внешние малые острова США",
	},
	{
		value: "Вьетнам",
		label: "Вьетнам",
	},
	{
		value: "Вьетнам Северный",
		label: "Вьетнам Северный",
	},
	{
		value: "Габон",
		label: "Габон",
	},
	{
		value: "Гаити",
		label: "Гаити",
	},
	{
		value: "Гайана",
		label: "Гайана",
	},
	{
		value: "Гамбия",
		label: "Гамбия",
	},
	{
		value: "Гана",
		label: "Гана",
	},
	{
		value: "Гваделупа",
		label: "Гваделупа",
	},
	{
		value: "Гватемала",
		label: "Гватемала",
	},
	{
		value: "Гвинея",
		label: "Гвинея",
	},
	{
		value: "Гвинея-Бисау",
		label: "Гвинея-Бисау",
	},
	{
		value: "Германия",
		label: "Германия",
	},
	{
		value: "Германия (ГДР)",
		label: "Германия (ГДР)",
	},
	{
		value: "Германия (ФРГ)",
		label: "Германия (ФРГ)",
	},
	{
		value: "Гибралтар",
		label: "Гибралтар",
	},
	{
		value: "Гондурас",
		label: "Гондурас",
	},
	{
		value: "Гонконг",
		label: "Гонконг",
	},
	{
		value: "Гренада",
		label: "Гренада",
	},
	{
		value: "Гренландия",
		label: "Гренландия",
	},
	{
		value: "Греция",
		label: "Греция",
	},
	{
		value: "Грузия",
		label: "Грузия",
	},
	{
		value: "Гуам",
		label: "Гуам",
	},
	{
		value: "Дания",
		label: "Дания",
	},
	{
		value: "Джибути",
		label: "Джибути",
	},
	{
		value: "Доминика",
		label: "Доминика",
	},
	{
		value: "Доминикана",
		label: "Доминикана",
	},
	{
		value: "Египет",
		label: "Египет",
	},
	{
		value: "Заир",
		label: "Заир",
	},
	{
		value: "Замбия",
		label: "Замбия",
	},
	{
		value: "Западная Сахара",
		label: "Западная Сахара",
	},
	{
		value: "Зимбабве",
		label: "Зимбабве",
	},
	{
		value: "Израиль",
		label: "Израиль",
	},
	{
		value: "Индия",
		label: "Индия",
	},
	{
		value: "Индонезия",
		label: "Индонезия",
	},
	{
		value: "Иордания",
		label: "Иордания",
	},
	{
		value: "Ирак",
		label: "Ирак",
	},
	{
		value: "Иран",
		label: "Иран",
	},
	{
		value: "Ирландия",
		label: "Ирландия",
	},
	{
		value: "Исландия",
		label: "Исландия",
	},
	{
		value: "Испания",
		label: "Испания",
	},
	{
		value: "Италия",
		label: "Италия",
	},
	{
		value: "Йемен",
		label: "Йемен",
	},
	{
		value: "Кабо-Верде",
		label: "Кабо-Верде",
	},
	{
		value: "Казахстан",
		label: "Казахстан",
	},
	{
		value: "Каймановы острова",
		label: "Каймановы острова",
	},
	{
		value: "Камбоджа",
		label: "Камбоджа",
	},
	{
		value: "Камерун",
		label: "Камерун",
	},
	{
		value: "Канада",
		label: "Канада",
	},
	{
		value: "Катар",
		label: "Катар",
	},
	{
		value: "Кения",
		label: "Кения",
	},
	{
		value: "Кипр",
		label: "Кипр",
	},
	{
		value: "Киргизия",
		label: "Киргизия",
	},
	{
		value: "Кирибати",
		label: "Кирибати",
	},
	{
		value: "Китай",
		label: "Китай",
	},
	{
		value: "Колумбия",
		label: "Колумбия",
	},
	{
		value: "Коморы",
		label: "Коморы",
	},
	{
		value: "Конго",
		label: "Конго",
	},
	{
		value: "Конго (ДРК)",
		label: "Конго (ДРК)",
	},
	{
		value: "Корея",
		label: "Корея",
	},
	{
		value: "Корея Северная",
		label: "Корея Северная",
	},
	{
		value: "Корея Южная",
		label: "Корея Южная",
	},
	{
		value: "Косово",
		label: "Косово",
	},
	{
		value: "Коста-Рика",
		label: "Коста-Рика",
	},
	{
		value: "Кот-д’Ивуар",
		label: "Кот-д’Ивуар",
	},
	{
		value: "Куба",
		label: "Куба",
	},
	{
		value: "Кувейт",
		label: "Кувейт",
	},
	{
		value: "Лаос",
		label: "Лаос",
	},
	{
		value: "Латвия",
		label: "Латвия",
	},
	{
		value: "Лесото",
		label: "Лесото",
	},
	{
		value: "Либерия",
		label: "Либерия",
	},
	{
		value: "Ливан",
		label: "Ливан",
	},
	{
		value: "Ливия",
		label: "Ливия",
	},
	{
		value: "Литва",
		label: "Литва",
	},
	{
		value: "Лихтенштейн",
		label: "Лихтенштейн",
	},
	{
		value: "Люксембург",
		label: "Люксембург",
	},
	{
		value: "Маврикий",
		label: "Маврикий",
	},
	{
		value: "Мавритания",
		label: "Мавритания",
	},
	{
		value: "Мадагаскар",
		label: "Мадагаскар",
	},
	{
		value: "Макао",
		label: "Макао",
	},
	{
		value: "Македония",
		label: "Македония",
	},
	{
		value: "Малави",
		label: "Малави",
	},
	{
		value: "Малайзия",
		label: "Малайзия",
	},
	{
		value: "Мали",
		label: "Мали",
	},
	{
		value: "Мальдивы",
		label: "Мальдивы",
	},
	{
		value: "Мальта",
		label: "Мальта",
	},
	{
		value: "Марокко",
		label: "Марокко",
	},
	{
		value: "Мартиника",
		label: "Мартиника",
	},
	{
		value: "Маршалловы острова",
		label: "Маршалловы острова",
	},
	{
		value: "Мексика",
		label: "Мексика",
	},
	{
		value: "Мозамбик",
		label: "Мозамбик",
	},
	{
		value: "Молдова",
		label: "Молдова",
	},
	{
		value: "Монако",
		label: "Монако",
	},
	{
		value: "Монголия",
		label: "Монголия",
	},
	{
		value: "Монтсеррат",
		label: "Монтсеррат",
	},
	{
		value: "Мьянма",
		label: "Мьянма",
	},
	{
		value: "Намибия",
		label: "Намибия",
	},
	{
		value: "Непал",
		label: "Непал",
	},
	{
		value: "Нигер",
		label: "Нигер",
	},
	{
		value: "Нигерия",
		label: "Нигерия",
	},
	{
		value: "Нидерланды",
		label: "Нидерланды",
	},
	{
		value: "Никарагуа",
		label: "Никарагуа",
	},
	{
		value: "Новая Зеландия",
		label: "Новая Зеландия",
	},
	{
		value: "Новая Каледония",
		label: "Новая Каледония",
	},
	{
		value: "Норвегия",
		label: "Норвегия",
	},
	{
		value: "ОАЭ",
		label: "ОАЭ",
	},
	{
		value: "Оккупированная Палестинская территория",
		label: "Оккупированная Палестинская территория",
	},
	{
		value: "Оман",
		label: "Оман",
	},
	{
		value: "Остров Мэн",
		label: "Остров Мэн",
	},
	{
		value: "Острова Кука",
		label: "Острова Кука",
	},
	{
		value: "Пакистан",
		label: "Пакистан",
	},
	{
		value: "Палау",
		label: "Палау",
	},
	{
		value: "Палестина",
		label: "Палестина",
	},
	{
		value: "Панама",
		label: "Панама",
	},
	{
		value: "Папуа - Новая Гвинея",
		label: "Папуа - Новая Гвинея",
	},
	{
		value: "Парагвай",
		label: "Парагвай",
	},
	{
		value: "Перу",
		label: "Перу",
	},
	{
		value: "Польша",
		label: "Польша",
	},
	{
		value: "Португалия",
		label: "Португалия",
	},
	{
		value: "Пуэрто Рико",
		label: "Пуэрто Рико",
	},
	{
		value: "Реюньон",
		label: "Реюньон",
	},
	{
		value: "Российская империя",
		label: "Российская империя",
	},
	{
		value: "Россия",
		label: "Россия",
	},
	{
		value: "Руанда",
		label: "Руанда",
	},
	{
		value: "Румыния",
		label: "Румыния",
	},
	{
		value: "СССР",
		label: "СССР",
	},
	{
		value: "США",
		label: "США",
	},
	{
		value: "Сальвадор",
		label: "Сальвадор",
	},
	{
		value: "Самоа",
		label: "Самоа",
	},
	{
		value: "Сан-Марино",
		label: "Сан-Марино",
	},
	{
		value: "Саудовская Аравия",
		label: "Саудовская Аравия",
	},
	{
		value: "Свазиленд",
		label: "Свазиленд",
	},
	{
		value: "Северная Македония",
		label: "Северная Македония",
	},
	{
		value: "Сейшельские острова",
		label: "Сейшельские острова",
	},
	{
		value: "Сенегал",
		label: "Сенегал",
	},
	{
		value: "Сент-Винсент и Гренадины",
		label: "Сент-Винсент и Гренадины",
	},
	{
		value: "Сент-Китс и Невис",
		label: "Сент-Китс и Невис",
	},
	{
		value: "Сент-Люсия ",
		label: "Сент-Люсия ",
	},
	{
		value: "Сербия",
		label: "Сербия",
	},
	{
		value: "Сербия и Черногория",
		label: "Сербия и Черногория",
	},
	{
		value: "Сиам",
		label: "Сиам",
	},
	{
		value: "Сингапур",
		label: "Сингапур",
	},
	{
		value: "Сирия",
		label: "Сирия",
	},
	{
		value: "Словакия",
		label: "Словакия",
	},
	{
		value: "Словения",
		label: "Словения",
	},
	{
		value: "Соломоновы Острова",
		label: "Соломоновы Острова",
	},
	{
		value: "Сомали",
		label: "Сомали",
	},
	{
		value: "Судан",
		label: "Судан",
	},
	{
		value: "Суринам",
		label: "Суринам",
	},
	{
		value: "Сьерра-Леоне",
		label: "Сьерра-Леоне",
	},
	{
		value: "Таджикистан",
		label: "Таджикистан",
	},
	{
		value: "Таиланд",
		label: "Таиланд",
	},
	{
		value: "Тайвань",
		label: "Тайвань",
	},
	{
		value: "Танзания",
		label: "Танзания",
	},
	{
		value: "Тимор-Лесте",
		label: "Тимор-Лесте",
	},
	{
		value: "Того",
		label: "Того",
	},
	{
		value: "Тонга",
		label: "Тонга",
	},
	{
		value: "Тринидад и Тобаго",
		label: "Тринидад и Тобаго",
	},
	{
		value: "Тувалу",
		label: "Тувалу",
	},
	{
		value: "Тунис",
		label: "Тунис",
	},
	{
		value: "Туркменистан",
		label: "Туркменистан",
	},
	{
		value: "Турция",
		label: "Турция",
	},
	{
		value: "Уганда",
		label: "Уганда",
	},
	{
		value: "Узбекистан",
		label: "Узбекистан",
	},
	{
		value: "Украина",
		label: "Украина",
	},
	{
		value: "Уоллис и Футуна",
		label: "Уоллис и Футуна",
	},
	{
		value: "Уругвай",
		label: "Уругвай",
	},
	{
		value: "Фарерские острова",
		label: "Фарерские острова",
	},
	{
		value: "Федеративные Штаты Микронезии",
		label: "Федеративные Штаты Микронезии",
	},
	{
		value: "Фиджи",
		label: "Фиджи",
	},
	{
		value: "Филиппины",
		label: "Филиппины",
	},
	{
		value: "Финляндия",
		label: "Финляндия",
	},
	{
		value: "Фолклендские острова",
		label: "Фолклендские острова",
	},
	{
		value: "Франция",
		label: "Франция",
	},
	{
		value: "Французская Гвиана",
		label: "Французская Гвиана",
	},
	{
		value: "Французская Полинезия",
		label: "Французская Полинезия",
	},
	{
		value: "Хорватия",
		label: "Хорватия",
	},
	{
		value: "ЦАР",
		label: "ЦАР",
	},
	{
		value: "Чад",
		label: "Чад",
	},
	{
		value: "Черногория",
		label: "Черногория",
	},
	{
		value: "Чехия",
		label: "Чехия",
	},
	{
		value: "Чехословакия",
		label: "Чехословакия",
	},
	{
		value: "Чили",
		label: "Чили",
	},
	{
		value: "Швейцария",
		label: "Швейцария",
	},
	{
		value: "Швеция",
		label: "Швеция",
	},
	{
		value: "Шри-Ланка",
		label: "Шри-Ланка",
	},
	{
		value: "Эквадор",
		label: "Эквадор",
	},
	{
		value: "Экваториальная Гвинея",
		label: "Экваториальная Гвинея",
	},
	{
		value: "Эритрея",
		label: "Эритрея",
	},
	{
		value: "Эстония",
		label: "Эстония",
	},
	{
		value: "Эфиопия",
		label: "Эфиопия",
	},
	{
		value: "ЮАР",
		label: "ЮАР",
	},
	{
		value: "Югославия",
		label: "Югославия",
	},
	{
		value: "Югославия (ФР)",
		label: "Югославия (ФР)",
	},
	{
		value: "Ямайка",
		label: "Ямайка",
	},
	{
		value: "Япония",
		label: "Япония",
	},
];

export const sortOptions: ISelectOption[] = [
	{ value: "rating.kp", label: "рейтингу KP (по убыванию)" },
	{ value: "-rating.kp", label: "рейтингу KP (по возрастанию)" },
	{ value: "rating.imdb", label: "рейтингу IMDB (по убыванию)" },
	{ value: "-rating.imdb", label: "рейтингу IMDB (по возрастанию)" },
	{ value: "year", label: "по дате (сначала новинки)" },
	{ value: "-year", label: "по дате (сначала более старые)" },
];

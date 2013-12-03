'use strict';

RhinoIn.factory('News', ['SiteLang', function(SiteLang) {
	var NEWS = {
		'ru': [
			{ id:  0, date: "11.08.2011", head: "Cеминар—конференция ВЗАИМОДЕЙСТВИЕ на СТРЕЛКЕ.", body: [] },
			{ id:  1, date: "11.09.2011", head: "Итоги семинара—конференции ВЗАИМОДЕЙСТВИЕ на СТРЕЛКЕ.", body: [] },
			{ id:  2, date: "11.10.2011", head: "Лекция Даниеля Пайкера в Москве.", body: [] },
			{ id:  3, date: "11.11.2011", head: "Почему лицензионный Rhino?", body: [] },
			{ id:  4, date: "11.12.2011", head: "Новогоднее предложение.", body: [] },
			{ id:  5, date: "11.01.2011", head: "Планы на 2012 год.", body: [] },
			{ id:  6, date: "11.02.2012", head: "Почему Rhinoceros 3D. Часть 1.", body: [] },
			{ id:  7, date: "11.03.2012", head: "Почему Rhinoceros 3D. Часть 2.", body: [] },
			{ id:  8, date: "11.04.2012", head: "FiDU. Создание Надуваемого Металла. Часть 1.", body: [] },
			{ id:  9, date: "11.05.2012", head: "FiDU. Создание Надуваемого Металла. Часть 1.", body: [] },
			{ id: 10, date: "11.06.2012", head: "АРХИМЕДИА 2012.", body: [] },
			{ id: 11, date: "11.07.2012", head: "FiDU. Создание Надуваемого Металла. Часть 3.", body: [] },
			{ id: 12, date: "11.08.2012", head: "Итоги АРХИМЕДИА 2012.", body: [] },
			{ id: 13, date: "11.09.2012", head: "13th International Architecture Exhibition", body: [] },
			{ id: 14, date: "11.10.2012", head: "Репортаж с COMMON GROUND. Giardini Highlights. Часть 1.", body: [] },
			{ id: 15, date: "11.11.2012", head: "Репортаж с COMMON GROUND. Giardini Highlights. Часть 2.", body: [] },
			{ id: 16, date: "11.12.2012", head: "Новогодний подарок от компании McNeel. Rhinoceros 5.0.", body: [] },
			{ id: 17, date: "11.01.2013", head: "Репортаж с COMMON GROUND. Arsenale Highlights.", body: [] },
			{ id: 18, date: "11.02.2013", head: "i-city.", body: [] },
			{ id: 19, date: "11.03.2013", head: "Rhino & Apple.", body: [] },
			{ id: 20, date: "11.04.2013", head: "Роза Павильон.", body: [] },
			{ id: 21, date: "11.05.2013", head: "Плагин rhino-in: Начало.", body: [] },
			{ id: 22, date: "11.06.2013", head: "Роза Павильон будет построен!", body: [] },
			{ id: 23, date: "11.07.2013", head: "Подготовка к зимней олимпиаде. Часть 1.", body: [] },
			{ id: 24, date: "11.08.2013", head: "Подготовка к зимней олимпиаде. Часть 2.", body: [] }
			],
		'en': [
			{ id: 0, date: "11.08.2011", head: "Exhibition BRANCH POINT.", body: [] },
			{ id: 1, date: "22.08.2011", head: "Site launched!", body: [] },
			{ id: 2, date: "27.08.2012", head: "13th International Architecture Exhibition.", body: [] },
			{ id: 3, date: "11.06.2013", head: "Rhino-In plug-in: Inception.", body: [] }
			]
		};

	return {
		getNews: function(sort) {
			var lang = SiteLang.getLanguage();
			var news = _.clone(NEWS[ lang.key ]);

			if (!_.isEqual(sort, 'asc')) {
				sort = 'desc';
			}

			return news;
		}
	};

}]);
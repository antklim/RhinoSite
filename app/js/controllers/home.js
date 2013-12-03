function HomeCtrl($scope, News, SiteText) {
	$scope.news = News.getNews();

	var getHomeHead = function() {
		return SiteText.getContent("home.text.home_head");
	};

	var getHomeBody = function() {
		return SiteText.getContent("home.text.home_body");
	};

	var getLearn = function() {
		return SiteText.getContent("home.button.learn");
	};

	var getView = function() {
		return SiteText.getContent("home.button.view");
	};

	$scope.init = function() {
		$scope.home_head = getHomeHead();
		$scope.home_body = getHomeBody();
		$scope.learn = getLearn();
		$scope.view = getView();

		$scope.news = News.getNews();
		$scope.news_head = [];
		$scope.news_body = [];

		for (var i=0, len=$scope.news.length; i<3; i++) {
			if (i >= len) {
				$scope.news_head.push("");
				$scope.news_body.push("");
			} else {
				$scope.news_head.push($scope.news[i].date + " " + $scope.news[i].head);
				$scope.news_body.push($scope.news[i].body[0]);
			}
		}

		console.log($scope.news);
	};

	$scope.init();

	$scope.$on("LANG_CHANGED", function(event, data) {
		$scope.init();
	});

}
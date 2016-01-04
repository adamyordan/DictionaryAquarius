// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'DictCtrl'
  })

  .state('search', {
    url: '/search/:lang',
    templateUrl: 'templates/search.html',
    controller: 'SearchCtrl',
    resolve: {
      lang: function($stateParams) {
        return $stateParams.lang;
      }
    }
  })

  .state('detail', {
    url: '/detail/:lang/id/:id',
    templateUrl: 'templates/detail.html',
    controller: 'DetailCtrl',
    resolve: {
      word: function($stateParams, WordDatabase) {
        return WordDatabase.getWord($stateParams.id);
      },
      lang: function($stateParams) {
        return $stateParams.lang;
      }
    }
  })

  .state('recommendation', {
    url: '/recommendation',
    templateUrl: 'templates/recommendation.html'
  })
  .state('verein', {
    url: '/verein',
    templateUrl: 'templates/verein.html'
  })
  .state('spende', {
    url: '/spende',
    templateUrl: 'templates/spende.html'
  })
  .state('faq', {
    url: '/faq',
    templateUrl: 'templates/faq.html'
  })
  .state('impressum', {
    url: '/impressum',
    templateUrl: 'templates/impressum.html'
  })
  .state('bedienung', {
    url: '/bedienung',
    templateUrl: 'templates/bedienung.html'
  })
  .state('weitere', {
    url: '/weitere',
    templateUrl: 'templates/weitere.html'
  })
})

app.factory('WordDatabase', function() {
  var database = [
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
    {id: 0, deutsch: "haus", franz: "house", synonym: "building", antonym: "tunnel", sound: true},
    {id: 1, deutsch: "kalt", franz: "cold", synonym: "cool", antonym: "hot", sound: true},
    {id: 2, deutsch: "asdf", franz: "kdada", synonym: "mklda", antonym: "kdajlda", sound: false},
    {id: 3, deutsch: "qwer", franz: "kdaldja", synonym: "kdlajd", antonym: "idjoa", sound: true},
    {id: 4, deutsch: "xzcv", franz: "adda", synonym: "kflaa", antonym: "kmdm", sound: false},
    {id: 5, deutsch: "lkjj", franz: "wdada", synonym: "rwefes", antonym: "zxsz", sound: false},
    {id: 6, deutsch: "ioda", franz: "adaad", synonym: "asdad", antonym: "kjldadma", sound: true},
  ];

  return {
    wordlist: database,
    getWord: function(index) {
      return database[index];
    }
  }
})

app.controller('SearchCtrl', function($scope, WordDatabase, lang) {
  $scope.words = WordDatabase.wordlist;
  $scope.lang = lang;
})

app.controller('DetailCtrl', function($scope, word, lang) {
  $scope.word = word;
  $scope.lang = lang;
})

app.controller('DictCtrl', function($scope) {
})

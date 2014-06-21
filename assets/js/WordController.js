angular.module("app")
    .controller("WordController", function ($scope) {
    $scope.data = {
        femaleName: 'female name',
        jobTitle: 'job title',
        tediousTask: 'tedious task',
        dirtyTask: 'dirty task',
        celebrity: 'celebrity',
        uselessSkill: 'useless skill',
        obnoxiousCelebrity: 'obnoxious celebrity',
        hugeNumber: 'huge number',
        adjective: 'adjective'
    };
});
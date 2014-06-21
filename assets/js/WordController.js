angular.module("app")
    .controller("WordController", function($scope) {
        $scope.data = {
            personName: 'person name',
            jobTitle: 'job title',
            tediousTask: 'tedious task',
            dirtyTask: 'dirty task',
            celebrity: 'celebrity',
            uselessSkill: 'useless skill',
            obnoxiousCelebrity: 'obnoxious celebrity',
            hugeNumber: 'huge number',
            adjective: 'adjective'
        };
    $scope.gender = new Gender(true);
});

function Gender(isFemale) {
    this.isFemale = isFemale;

    this.himHer = function () {
        return this.isFemale ? "her" : "him";
    }

    this.heShe = function () {
        return this.isFemale ? "she" : "he";
    }

    this.hisHer = function () {
        return this.isFemale ? "her" : "his";
    }

}
angular.module("app")
    .controller("GameController", function($scope) {
        initializeForm();

        $scope.submit = function () {
            $scope.submitted = true;
            if ($scope.myForm.$valid) {
                $scope.view = "story";
            }
        };

    $scope.submitted = false;

        $scope.reset = function() {
            initializeForm();
        };

        $scope.hasError = function (field, validation) {
            if (!$scope.submitted) {
                return false;
            }

            if (validation === undefined) {
                validation = "required";
            }

            //var code = field + "-" + $scope.myForm[field].$error[validation];
            //console.log(code);
            return $scope.myForm[field].$error[validation];
        };

        function initializeForm() {
            $scope.data = getNewPerson();
            $scope.gender = new Gender(true);

            $scope.view = "form"; // views are 'form' and 'story'
        }

        function getNewPerson() {
            return {
                personName: '',
                jobTitle: '',
                tediousTask: '',
                dirtyTask: '',
                celebrity: '',
                uselessSkill: '',
                obnoxiousCelebrity: '',
                hugeNumber: 0,
                adjective: ''
            };
        }
});

function Gender(isFemale) {
    this.isFemale = isFemale;

    this.himHer = function() {
        return this.isFemale ? "her" : "him";
    };

    this.heShe = function() {
        return this.isFemale ? "she" : "he";
    };

    this.hisHer = function() {
        return this.isFemale ? "her" : "his";
    };

}
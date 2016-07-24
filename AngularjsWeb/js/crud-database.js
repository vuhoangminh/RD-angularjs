app.controller('newDatabaseCtrl', function($scope, $http, $templateCache) {

    var getPath = 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/all';
    $http.get(getPath).then(function(response) {
        $scope.projects = response.data;
    });

    $scope.alert = null;

    /*$scope.projects = [
    {
        "projectId": "VungTau",
        "wells": [
        {
            "wellId": "Cong ty ABC 1.1",
            "runs": [
            {
                    "runId": "Test tiếng việt 1.1.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.1.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.1.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Cong ty ABC 1.2",
            "runs": [
            {
                    "runId": "Test tiếng việt 1.2.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.2.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.2.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Cong ty ABC 1.3",
            "runs": [
            {
                    "runId": "Test tiếng việt 1.3.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.3.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 1.3.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        }]
    },
    {
        "projectId": "DaLat",
        "wells": [
        {
            "wellId": "Công ty ABC 2.1",
            "runs": [
            {
                    "runId": "Test tiếng việt 2.1.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.1.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.1.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 2.2",
            "runs": [
            {
                    "runId": "Test tiếng việt 2.2.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.2.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.2.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 2.3",
            "runs": [
            {
                    "runId": "Test tiếng việt 2.3.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.3.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 2.3.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        }]
    },
    {
        "projectId": "DaNang",
        "wells": [
        {
            "wellId": "Công ty ABC 3.1",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.1.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.1.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.1.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 3.2",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.2.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.2.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.2.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 3.3",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.3.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.3.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.3.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        }]
    },
    {
        "projectId": "VungTau2",
        "wells": [
        {
            "wellId": "Công ty ABC 3.1",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.1.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.1.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.1.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 3.2",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.2.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.2.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.2.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        },
        {
            "wellId": "Công ty ABC 3.3",
            "runs": [
            {
                    "runId": "Test tiếng việt 3.3.1",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.3.2",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            },
            {
                    "runId": "Test tiếng việt 3.3.3",
                    "lastActivity": 1468490183000,
                    "filePath":"" 
            }]
        }]
    }]*/

    //$scope.myProject = $scope.projects[0];

    $scope.currentProject = null;
    $scope.currentWell = null;

    function string2ProjObj(project) {
        for(var i = 0; i < $scope.projects.length; i++) {
            if (project === $scope.projects[i].projectId)
                return $scope.projects[i];
        }
        return false; 
    }

    function string2WellObj(well) {
        if ($scope.currentProject) {
            for(var i = 0; i < $scope.currentProject.wells.length; i++) {
                if (well === $scope.currentProject.wells[i].wellId)
                    return $scope.currentProject.wells[i];
            }
        }
        return false; 
    }

    $scope.setCurrentProject = function(project) {
        $("#hehe").css('display', 'none');
        $("#well").val('');
        $("#run").val('');

        if ((typeof project) == "string") {
            project = string2ProjObj(project);
            if (!project) {
                $scope.currentProject = null;
                return;
            }
        } 
        $scope.currentProject = project;
        console.log(project);   
    }

    $scope.setCurrentWell = function(well) {
        $("#hehe").css('display', 'none');
        $("#run").val('');

        if ((typeof well) == "string") {
            well = string2WellObj(well);
            if (!well) {
                $scope.currentWell = null;
                return;
            }
        } 
        $scope.currentWell = well;
        console.log(well);
    }

    $scope.setCurrentRun = function(run) {
        $("#hehe").css('display', 'none');
    }

    $scope.submit = function() {
        if ($scope.currentWell) {
            for (var i = 0; i < $scope.currentWell.runs.length; i++) {
                if ($("#run").val() == $scope.currentWell.runs[i].runId) {
                    $scope.alert = "Project > Well > Run already existed.";
                    $("#hehe").css('display', 'block');
                    return;
                }
            }
        }

        var projectId = $('#project').val();
        var wellId = $('#well').val();
        var runId = $('#run').val();
        var fileLas = $('#file-las')[0].files[0];

        console.log(fileLas);

        var datas = 
        {
            "projectId": "",
            "wells": [
            {
                "wellId": "",
                "runs": [
                {
                    "runId": ""
                }]
            }]
        };

        datas.projectId = projectId;
        datas.wells[0].wellId = wellId;
        datas.wells[0].runs[0].runId = runId;

        console.log(datas);

        var req = {
            method: 'POST',
            url: 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: datas
        };

        $http(req).then(function successCallback(res) {
            console.log(res.data);

            var fd = new FormData();
            fd.append('file', fileLas);
            fd.append('token', res.data.content);


            var request = {
                method: 'POST',
                url: 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/file',
                headers: {
                   'Content-Type': undefined
                },
                data: fd
            };

            $http(request).then(function successCallback(response) {
                console.log(response.data);
                $scope.alert = "MessageList: " + respose.data.messageList[0] + 
                            ".\nContent: " + respose.data.content + ".";
                $("#hehe").css('display', 'block');
            }, function errorCallback(response) {
                console.log(response.data);
                $scope.alert = "MessageList: " + response.data.messageList[0] + 
                            ".\nContent: " + response.data.content + ".";
                $("#hehe").css('display', 'block');
            });
        }, function errorCallback(res) {
            console.log(res.data);
            console.log(res);
            $scope.alert = "MessageList: " + res.data.messageList[0] + 
                            ".\nContent: " + res.data.content + ".";
            $("#hehe").css('display', 'block');
        });


    };

    $(".myReset").on('click', function() {
        $("#hehe").css('display', 'none');
        console.log("reset");
        $("#project").val('');
        $("#well").val('');
        $("#run").val('');
    });


});

app.controller('deleteDemo', function($scope, $http) {
    $scope.deleteHttp = function() {
        var datas = 
        {
            "projectId": "",
            "wells": [
            {
                "wellId": "",
                "runs": [
                {
                    "runId": ""
                }]
            }]
        };

        datas.projectId = $scope.projectId;
        datas.wells[0].wellId = $scope.wellId;
        datas.wells[0].runs[0].runId = $scope.runId;

        $http({
            method: 'DELETE',
            url: 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: datas
        }).then(function successCallback(res) {
            console.log(res);
        }, function errorCallback(res) {
            console.log(res);
        });
    }
});

app.controller('updateDemo', function($scope, $http) {
    $scope.updateHttp = function() {
        var datas = 
        {
            "projectId": "",
            "wells": [
            {
                "wellId": "",
                "runs": [
                {
                    "runId": "",
                    "otherFields": {
             
                    }
                }]
            }]
        };

        datas.projectId = $scope.projectId;
        datas.wells[0].wellId = $scope.wellId;
        datas.wells[0].runs[0].runId = $scope.runId;
        datas.wells[0].runs[0].otherFields[$scope.key] = $scope.value;

        $http({
            method: 'PUT',
            url: 'http://192.168.1.150:8080/smartdatics-sora/restapi/uploadData/?isUpdate=true',
            headers: {
                'Content-Type': 'application/json'
            },
            data: datas
        }).then(function successCallback(res) {
            console.log(res);
        }, function errorCallback(res) {
            console.log(res);
        });
    }
})
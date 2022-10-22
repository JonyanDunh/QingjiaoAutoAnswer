// ==UserScript==
// @name         fuck-qingjiao
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.2-class.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=2-class.com
// @grant       GM_cookie
// @grant       unsafeWindow
// ==/UserScript==

(function () {
    'use strict';
    //竞赛
    compelete_quiz()
    var task=new task
    task.compelete_task_5
    task.compelete_task_6
    task.compelete_task_7
    task.compelete_task_8
    task.compelete_task_9
    function compelete_quiz() {
        var datas_quiz = JSON.stringify({
            "list": [
                { "questionId": 3196, "questionContent": "C" }, { "questionId": 3165, "questionContent": "D" },
                { "questionId": 3104, "questionContent": "D" }, { "questionId": 3201, "questionContent": "D" },
                { "questionId": 3202, "questionContent": "D" }, { "questionId": 3170, "questionContent": "A" },
                { "questionId": 3171, "questionContent": "A" }, { "questionId": 3174, "questionContent": "D" },
                { "questionId": 3142, "questionContent": "C" }, { "questionId": 3208, "questionContent": "C" },
                { "questionId": 3209, "questionContent": "D" }, { "questionId": 3210, "questionContent": "B" },
                { "questionId": 3147, "questionContent": "D" }, { "questionId": 3119, "questionContent": "B" },
                { "questionId": 3216, "questionContent": "A" }, { "questionId": 3153, "questionContent": "D" },
                { "questionId": 3186, "questionContent": "A" }, { "questionId": 3188, "questionContent": "A" },
                { "questionId": 3126, "questionContent": "A" }, { "questionId": 3161, "questionContent": "D" }
            ],
            "time": 30,
            "reqtoken": unsafeWindow.__DATA__.reqtoken
        });;


        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "https://www.2-class.com/api/quiz/commit");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(datas_quiz);
    }
    class exams {


    }
    class task {
        compelete_task_5() {
            var datas = []
            datas.push(JSON.stringify({
                "courseId": "1348",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "2,3"
                }, {
                    "examId": 2,
                    "answer": "0,1,3"
                }, {
                    "examId": 3,
                    "answer": "0,1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1330",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 0
                }, {
                    "examId": 2,
                    "answer": "0,1,3"
                }, {
                    "examId": 3,
                    "answer": "0,1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1327",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 2
                }, {
                    "examId": 2,
                    "answer": 3
                }, {
                    "examId": 3,
                    "answer": 1
                }, {
                    "examId": 4,
                    "answer": 1
                }, {
                    "examId": 5,
                    "answer": "0,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1284",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 2
                }, {
                    "examId": 2,
                    "answer": 2
                }, {
                    "examId": 3,
                    "answer": 0
                }, {
                    "examId": 4,
                    "answer": 2
                }, {
                    "examId": 5,
                    "answer": 3
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            //
            datas.push(JSON.stringify({
                "courseId": "1328",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 3
                }, {
                    "examId": 2,
                    "answer": 1
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": 0
                }, {
                    "examId": 5,
                    "answer": "0,1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1277",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 0
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": 0
                }, {
                    "examId": 5,
                    "answer": 2
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            for (var data of datas) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", "https://www.2-class.com/api/exam/commit");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);
            }

        }
        compelete_task_6() {
            var datas = []
            datas.push(JSON.stringify({
                "courseId": "1347",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 1
                }, {
                    "examId": 2,
                    "answer": "1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1346",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 2
                }, {
                    "examId": 2,
                    "answer": 3
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1331",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 1
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": "0,1,2,3"
                }, {
                    "examId": 4,
                    "answer": 3
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1329",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 0
                }, {
                    "examId": 2,
                    "answer": 1
                }, {
                    "examId": 3,
                    "answer": 0
                }, {
                    "examId": 4,
                    "answer": 3
                }, {
                    "examId": 5,
                    "answer": "0,1,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1328",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 3
                }, {
                    "examId": 2,
                    "answer": 1
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": 0
                }, {
                    "examId": 5,
                    "answer": "0,1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1277",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 0
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": 0
                }, {
                    "examId": 5,
                    "answer": 2
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            for (var data of datas) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", "https://www.2-class.com/api/exam/commit");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);
            }

        }
        compelete_task_7() {
            var datas = []
            datas.push(JSON.stringify({ "courseId": "1357", "examCommitReqDataList": [{ "examId": 1, "answer": 0 }, { "examId": 2, "answer": "0,1,2" }], "exam": "course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
            datas.push(JSON.stringify({ "courseId": "1345", "examCommitReqDataList": [{ "examId": 1, "answer": "0,2" }, { "examId": 2, "answer": "0,3" }], "exam": "course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
            datas.push(JSON.stringify({ "courseId": "1344", "examCommitReqDataList": [{ "examId": 1, "answer": 2 }, { "examId": 2, "answer": "0,1,2" }], "exam": "course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
            datas.push(JSON.stringify({ "courseId": "1283", "examCommitReqDataList": [{ "examId": 1, "answer": 2 }, { "examId": 2, "answer": 3 }, { "examId": 3, "answer": 0 }, { "examId": 4, "answer": 0 }, { "examId": 5, "answer": "0,1" }], "exam": "course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
            datas.push(JSON.stringify({
                "courseId": "1282",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 3
                }, {
                    "examId": 2,
                    "answer": 2
                }, {
                    "examId": 3,
                    "answer": 1
                }, {
                    "examId": 4,
                    "answer": 3
                }, {
                    "examId": 5,
                    "answer": 1
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            for (var data of datas) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", "https://www.2-class.com/api/exam/commit");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);
            }


        }
        compelete_task_8() {
            var datas = []
            datas.push(JSON.stringify({
                "courseId": "1358",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "0,1,2"
                }, {
                    "examId": 2,
                    "answer": 2
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1355",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 1
                }, {
                    "examId": 2,
                    "answer": 1
                }, {
                    "examId": 3,
                    "answer": "0,1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1354",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 2
                }, {
                    "examId": 2,
                    "answer": 2
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": "1,2"
                }, {
                    "examId": 5,
                    "answer": "0,1"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1343",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "2,3"
                }, {
                    "examId": 2,
                    "answer": "1,2"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1342",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "0,2,3"
                }, {
                    "examId": 2,
                    "answer": "1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1281",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 1
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": 3
                }, {
                    "examId": 4,
                    "answer": 2
                }, {
                    "examId": 5,
                    "answer": "0,1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1280",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 0
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": 1
                }, {
                    "examId": 4,
                    "answer": 1
                }, {
                    "examId": 5,
                    "answer": "0,1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))


            for (var data of datas) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", "https://www.2-class.com/api/exam/commit");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);
            }

        }
        compelete_task_9() {
            var datas = []
            datas.push(JSON.stringify({
                "courseId": "1359",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "0,1,2"
                }, {
                    "examId": 2,
                    "answer": "0,1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1341",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "1,2"
                }, {
                    "examId": 2,
                    "answer": "0,1,2,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1340",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "0,1,3"
                }, {
                    "examId": 2,
                    "answer": "1,3"
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1279",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": "0,1"
                }, {
                    "examId": 2,
                    "answer": 2
                }, {
                    "examId": 3,
                    "answer": "0,1,2,3"
                }, {
                    "examId": 4,
                    "answer": "0,1,2,3"
                }, {
                    "examId": 5,
                    "answer": 3
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))
            datas.push(JSON.stringify({
                "courseId": "1278",
                "examCommitReqDataList": [{
                    "examId": 1,
                    "answer": 2
                }, {
                    "examId": 2,
                    "answer": 0
                }, {
                    "examId": 3,
                    "answer": 0
                }, {
                    "examId": 4,
                    "answer": 0
                }, {
                    "examId": 5,
                    "answer": 1
                }], "reqtoken": unsafeWindow.__DATA__.reqtoken
            }))



            for (var data of datas) {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log(this.responseText);
                    }
                });
                xhr.open("POST", "https://www.2-class.com/api/exam/commit");
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.send(data);
            }

        }
    }

    // Your code here...
})();
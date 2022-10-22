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
    function compelete_exam_7() {
        var datas = []

        datas.push(JSON.stringify({ "courseId": "1357", "examCommitReqDataList": [{ "examId": 1, "answer": 0 }, { "examId": 2, "answer": "0,1,2" }], "exam": "course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
        datas.push(JSON.stringify({ "courseId":"1345","examCommitReqDataList":[{"examId":1,"answer":"0,2"},{"examId":2,"answer":"0,3"}],"exam":"course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
        datas.push(JSON.stringify({ "courseId":"1344","examCommitReqDataList":[{"examId":1,"answer":2},{"examId":2,"answer":"0,1,2"}],"exam":"course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))
        datas.push(JSON.stringify({ "courseId":"1283","examCommitReqDataList":[{"examId":1,"answer":2},{"examId":2,"answer":3},{"examId":3,"answer":0},{"examId":4,"answer":0},{"examId":5,"answer":"0,1"}],"exam":"course", "reqtoken": unsafeWindow.__DATA__.reqtoken }))


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
    // Your code here...
})();
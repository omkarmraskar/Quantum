"use strict";
export const __esModule = true;
function isExpired(item) {
    if (item == true) {
        return "Expired";
    }
    else
        return "";
}
fetch('json/card.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    var cont = obj.card;
    var cardContainer = document.querySelector("#cards");
    var i = 0;
    for (var _i = 0, cont_1 = cont; _i < cont_1.length; _i++) {
        var item = cont_1[_i];
        i++;
        // const item = cont[0];
        var card = document.createElement("div");
        var cardClass = "card-".concat(i);
        card.classList.add("".concat(cardClass));
        cardContainer.appendChild(card);
        var expire = "".concat(isExpired(item.expired));
        var expireDiv = document.createElement("div");
        if (expire.length > 0) {
            expireDiv.classList.add("".concat(expire));
            expireDiv.setAttribute('id', "expired-".concat(i));
            var expireText = document.createElement("span");
            expireText.innerHTML = "".concat(isExpired(item.expired));
            card.appendChild(expireDiv);
        }
        var detail = document.createElement("div");
        detail.classList.add("details");
        var img = document.createElement("div");
        img.classList.add("image");
        var imgSrc = document.createElement("img");
        imgSrc.setAttribute('src', "".concat(item.image));
        imgSrc.setAttribute('alt', "".concat(item.image));
        img.appendChild(imgSrc);
        detail.appendChild(img);
        var cardData = document.createElement("div");
        cardData.classList.add("data");
        var name_1 = document.createElement("div");
        name_1.classList.add("name");
        var title = document.createElement("span");
        title.innerHTML = "".concat(item.card_title);
        name_1.appendChild(title);
        var favorite = document.createElement("img");
        favorite.setAttribute('src', "".concat(item.favourite));
        favorite.setAttribute('id', "card-".concat(i, "-fav"));
        favorite.setAttribute('onclick', 'favorite(id)');
        name_1.appendChild(favorite);
        cardData.appendChild(name_1);
        var subject = document.createElement("div");
        subject.classList.add("subj");
        for (var j = 0; j < item.subject.length; j++) {
            var sub = document.createElement("span");
            sub.innerHTML = "".concat(item.subject[j]);
            subject.appendChild(sub);
        }
        cardData.appendChild(subject);
        var syllabus = document.createElement("div");
        syllabus.classList.add("syllabus");
        var unitNo = document.createElement("span");
        unitNo.classList.add("no");
        unitNo.innerHTML = "".concat(item.unit_no);
        syllabus.appendChild(unitNo);
        var unit = document.createElement("span");
        unit.classList.add("text");
        unit.innerHTML = "".concat(item.unit);
        syllabus.appendChild(unit);
        var lessonNo = document.createElement("span");
        lessonNo.classList.add("no");
        lessonNo.innerHTML = "".concat(item.lesson_no);
        syllabus.appendChild(lessonNo);
        var lesson = document.createElement("span");
        lesson.classList.add("text");
        lesson.innerHTML = "".concat(item.lesson);
        syllabus.appendChild(lesson);
        var topicNo = document.createElement("span");
        topicNo.classList.add("no");
        topicNo.innerHTML = "".concat(item.topic_no);
        syllabus.appendChild(topicNo);
        var topic = document.createElement("span");
        topic.classList.add("text");
        topic.innerHTML = "".concat(item.topic);
        syllabus.appendChild(topic);
        cardData.appendChild(syllabus);
        var teacher = document.createElement("div");
        teacher.classList.add("teacher");
        var selectTeacher = document.createElement("select");
        selectTeacher.setAttribute('id', 'teacher');
        for (var j = 0; j < item.option.length; j++) {
            var option = document.createElement("option");
            option.setAttribute('value', "".concat(item.option[j]));
            option.innerHTML = "".concat(item.option[j]);
            selectTeacher.appendChild(option);
        }
        teacher.appendChild(selectTeacher);
        cardData.appendChild(teacher);
        var studentDuration = document.createElement("div");
        studentDuration.classList.add("student-duration");
        var student = document.createElement("span");
        student.innerHTML = "".concat(item.student);
        studentDuration.appendChild(student);
        var divider = document.createElement("span");
        divider.innerHTML = "|";
        studentDuration.appendChild(divider);
        var duration = document.createElement("span");
        duration.innerHTML = "".concat(item.duration);
        studentDuration.appendChild(duration);
        cardData.appendChild(studentDuration);
        detail.appendChild(cardData);
        card.appendChild(detail);
        var mainDivider = document.createElement("div");
        mainDivider.classList.add("divider");
        card.appendChild(mainDivider);
        var detailFooter = document.createElement("div");
        detailFooter.classList.add("details-footer");
        var previewImg = document.createElement("img");
        previewImg.setAttribute('src', "".concat(item.preview_icon));
        previewImg.setAttribute('id', "card-".concat(i, "-1"));
        // previewImg.setAttribute('onclick', 'changeOpacity(id)');
        detailFooter.appendChild(previewImg);
        var manageCourse = document.createElement("img");
        manageCourse.setAttribute('src', "".concat(item.manage_course));
        manageCourse.setAttribute('id', "card-".concat(i, "-2"));
        // manageCourse.setAttribute('onclick', 'changeOpacity(id)');
        detailFooter.appendChild(manageCourse);
        var grade = document.createElement("img");
        grade.setAttribute('src', "".concat(item.grade_submission));
        grade.setAttribute('id', "card-".concat(i, "-3"));
        // grade.setAttribute('onclick', 'changeOpacity(id)');
        detailFooter.appendChild(grade);
        var report = document.createElement("img");
        report.setAttribute('src', "".concat(item.report));
        report.setAttribute('id', "card-".concat(i, "-4"));
        // report.setAttribute('onclick', 'changeOpacity(id)');
        detailFooter.appendChild(report);
        card.appendChild(detailFooter);
    }
});

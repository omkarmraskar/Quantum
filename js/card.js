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
            if (j == item.isSelected) {
                option.setAttribute("selected", "");
            }
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
        if (item.isDisabled[0] == true) {
            previewImg.classList.add("opacityChange");
        }
        detailFooter.appendChild(previewImg);
        var manageCourse = document.createElement("img");
        manageCourse.setAttribute('src', "".concat(item.manage_course));
        manageCourse.setAttribute('id', "card-".concat(i, "-2"));
        if (item.isDisabled[1] == true) {
            manageCourse.classList.add("opacityChange");
        }
        detailFooter.appendChild(manageCourse);
        var grade = document.createElement("img");
        grade.setAttribute('src', "".concat(item.grade_submission));
        grade.setAttribute('id', "card-".concat(i, "-3"));
        if (item.isDisabled[2] == true) {
            grade.classList.add("opacityChange");
        }
        detailFooter.appendChild(grade);
        var report = document.createElement("img");
        report.setAttribute('src', "".concat(item.report));
        report.setAttribute('id', "card-".concat(i, "-4"));
        if (item.isDisabled[3] == true) {
            report.classList.add("opacityChange");
        }
        detailFooter.appendChild(report);
        card.appendChild(detailFooter);
    }
    var alert_objects = obj.AlertArray;
    var alertContainer = document.getElementById("alert_list");
    for (var _a = 0, alert_objects_1 = alert_objects; _a < alert_objects_1.length; _a++) {
        var alert_1 = alert_objects_1[_a];
        var li = document.createElement("li");
        li.classList.add("alert_list_item");
        var msgdiv = document.createElement("div");
        msgdiv.classList.add("msg");
        li.appendChild(msgdiv);
        var p = document.createElement("p");
        p.innerHTML = alert_1.msg;
        msgdiv.appendChild(p);
        var img = document.createElement("img");
        if (alert_1.isNewAlert) {
            img.src = "./icons/alerts.svg";
            li.style.backgroundColor = "#FFFFEE";
        }
        else {
            img.src = "./icons/checkbox-checked.svg";
            img.setAttribute("id", "checkbox");
        }
        msgdiv.appendChild(img);
        if (alert_1.course != "") {
            var courseclassdiv = document.createElement("div");
            courseclassdiv.classList.add("class_course_alert");
            li.appendChild(courseclassdiv);
            var course_title = document.createElement("span");
            course_title.classList.add("class_or_course");
            course_title.classList.add("faded");
            course_title.innerHTML = "Course: ";
            courseclassdiv.appendChild(course_title);
            var course_name = document.createElement("span");
            course_name.classList.add("class_course_name");
            course_name.innerHTML = alert_1.course;
            courseclassdiv.appendChild(course_name);
        }
        var date_time = document.createElement("span");
        date_time.classList.add("date-time");
        date_time.classList.add("faded");
        date_time.innerHTML = alert_1.date_time;
        li.appendChild(date_time);
        alertContainer.appendChild(li);
    }
    var announcement_objects = obj.AnnouncementArray;
    var announcement_list = document.getElementById("announcement_list");
    for (var _b = 0, announcement_objects_1 = announcement_objects; _b < announcement_objects_1.length; _b++) {
        var announcement = announcement_objects_1[_b];
        var li = document.createElement("li");
        li.classList.add("announcement_list_item");
        announcement_list.appendChild(li);
        var pa_header = document.createElement("div");
        pa_header.classList.add("pa_header");
        li.appendChild(pa_header);
        var header_p = document.createElement("p");
        pa_header.appendChild(header_p);
        var pa_title = document.createElement("span");
        pa_title.classList.add("pa_title");
        pa_title.innerHTML = "PA: ";
        header_p.appendChild(pa_title);
        var pa_name = document.createElement("span");
        pa_name.classList.add("pa_name");
        pa_name.innerHTML = announcement.pa_name;
        header_p.appendChild(pa_name);
        var img = document.createElement("img");
        img.src = "./icons/checkbox-checked.svg";
        pa_header.appendChild(img);
        var pa_msg = document.createElement("p");
        pa_msg.classList.add("pa_msg");
        pa_msg.innerHTML = announcement.msg;
        li.appendChild(pa_msg);
        var coursename = document.createElement("div");
        coursename.classList.add("class_course_announcement");
        li.appendChild(coursename);
        var course = document.createElement("span");
        course.classList.add("class_or_course");
        course.innerHTML = "Course: ";
        coursename.appendChild(course);
        var course_title = document.createElement("span");
        course_title.classList.add("class_course_name");
        course_title.innerHTML = announcement.course;
        coursename.appendChild(course_title);
        var pa_footer = document.createElement("div");
        pa_footer.classList.add("pa_footer");
        li.appendChild(pa_footer);
        var attachedfile = document.createElement("div");
        attachedfile.classList.add("attachedfile");
        pa_footer.appendChild(attachedfile);
        var attachimg = document.createElement("img");
        attachimg.src = "./icons/file_attach.png";
        attachedfile.appendChild(attachimg);
        var no_of_file_attached = document.createElement("span");
        no_of_file_attached.innerHTML = announcement.no_of_file_attached + " Files Atteched";
        attachedfile.appendChild(no_of_file_attached);
        var date_time = document.createElement("span");
        date_time.classList.add("announcement_date_time");
        date_time.innerHTML = announcement.date_time;
        pa_footer.appendChild(date_time);
    }
});

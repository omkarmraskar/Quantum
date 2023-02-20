function isExpired(item){
    
    if(item == true){

        return "Expired";
    }
    else return "";
}

fetch('json/card.json').then(function(response){
    return response.json();
}).then(function (obj){
    let cont = obj.card;
    const cardContainer = document.querySelector("#cards") as HTMLDivElement;
    let i=0;
    for(let item of cont){
        i++;
        let card = document.createElement("div");
        let cardClass = `card-${i}`;
        card.classList.add(`${cardClass}`);
        cardContainer.appendChild(card);
        
            let expire:string = `${isExpired(item.expired)}`;
            let expireDiv = document.createElement("div");
            if(expire.length>0){
                expireDiv.classList.add(`${expire}`);
                expireDiv.setAttribute('id', `expired-${i}`);
                let expireText = document.createElement("span");
                expireText.innerHTML = `${isExpired(item.expired)}`
                card.appendChild(expireDiv);
            }
            
            
            let detail = document.createElement("div");
            detail.classList.add("details");

                let img = document.createElement("div");
                img.classList.add("image");
                let imgSrc = document.createElement("img");
                imgSrc.setAttribute('src', `${item.image}`);
                imgSrc.setAttribute('alt', `${item.image}`);
                img.appendChild(imgSrc);

            detail.appendChild(img);

                let cardData = document.createElement("div");
                cardData.classList.add("data");

                    let name = document.createElement("div");
                    name.classList.add("name");
                        let title = document.createElement("span");
                        title.innerHTML = `${item.card_title}`;
                        name.appendChild(title);

                        let favorite = document.createElement("img");
                        favorite.setAttribute('src', `${item.favourite}`)
                        favorite.setAttribute('id', `card-${i}-fav`)
                        favorite.setAttribute('onclick', 'favorite(id)')
                        name.appendChild(favorite);
                        
                        cardData.appendChild(name);

                    let subject = document.createElement("div");
                    subject.classList.add("subj");

                        for(let j=0; j<item.subject.length; j++){
                            let sub = document.createElement("span");
                            sub.innerHTML = `${item.subject[j]}`
                            subject.appendChild(sub);
                        }
                        cardData.appendChild(subject);

                    let syllabus = document.createElement("div");
                    syllabus.classList.add("syllabus");

                        let unitNo = document.createElement("span");
                        unitNo.classList.add("no");
                        unitNo.innerHTML = `${item.unit_no}`;
                        syllabus.appendChild(unitNo);

                        let unit = document.createElement("span");
                        unit.classList.add("text");
                        unit.innerHTML = `${item.unit}`;
                        syllabus.appendChild(unit);

                        let lessonNo = document.createElement("span");
                        lessonNo.classList.add("no");
                        lessonNo.innerHTML = `${item.lesson_no}`;
                        syllabus.appendChild(lessonNo);

                        let lesson = document.createElement("span");
                        lesson.classList.add("text");
                        lesson.innerHTML = `${item.lesson}`;
                        syllabus.appendChild(lesson);

                        let topicNo = document.createElement("span");
                        topicNo.classList.add("no");
                        topicNo.innerHTML = `${item.topic_no}`;
                        syllabus.appendChild(topicNo);

                        let topic = document.createElement("span");
                        topic.classList.add("text");
                        topic.innerHTML = `${item.topic}`;
                        syllabus.appendChild(topic);

                        cardData.appendChild(syllabus);
                    
                    let teacher = document.createElement("div");
                    teacher.classList.add("teacher");
                        let selectTeacher = document.createElement("select");
                        selectTeacher.setAttribute('id', 'teacher');

                        for(let j=0; j<item.option.length; j++){
                            let option = document.createElement("option");
                            option.setAttribute('value', `${item.option[j]}`);
                            option.innerHTML = `${item.option[j]}`;
                            if(j == item.isSelected){
                                option.setAttribute("selected", "");
                            }
                            selectTeacher.appendChild(option);
                        }
                        teacher.appendChild(selectTeacher);
                    cardData.appendChild(teacher);

                    let studentDuration = document.createElement("div");
                    studentDuration.classList.add("student-duration");
                        let student = document.createElement("span");
                        student.innerHTML = `${item.student}`;
                        studentDuration.appendChild(student);
                        let divider = document.createElement("span");
                        divider.innerHTML = "|";
                        studentDuration.appendChild(divider);
                        let duration = document.createElement("span");
                        duration.innerHTML = `${item.duration}`;
                        studentDuration.appendChild(duration);
                    cardData.appendChild(studentDuration);       
                    detail.appendChild(cardData);
                    card.appendChild(detail);

                let mainDivider = document.createElement("div");
                mainDivider.classList.add("divider");
                card.appendChild(mainDivider);

                let detailFooter = document.createElement("div");
                detailFooter.classList.add("details-footer");
                    let previewImg = document.createElement("img");
                    previewImg.setAttribute('src', `${item.preview_icon}`);
                    previewImg.setAttribute('id', `card-${i}-1`);
                    if(item.isDisabled[0] == true){
                        previewImg.classList.add("opacityChange");
                    }
                    detailFooter.appendChild(previewImg);

                    let manageCourse = document.createElement("img");
                    manageCourse.setAttribute('src', `${item.manage_course}`);
                    manageCourse.setAttribute('id', `card-${i}-2`);
                    if(item.isDisabled[1] == true){
                        manageCourse.classList.add("opacityChange");
                    }
                    
                    detailFooter.appendChild(manageCourse);

                    let grade = document.createElement("img");
                    grade.setAttribute('src', `${item.grade_submission}`);
                    grade.setAttribute('id', `card-${i}-3`);
                    if(item.isDisabled[2] == true){
                        grade.classList.add("opacityChange");
                    }
                    
                    detailFooter.appendChild(grade);

                    let report = document.createElement("img");
                    report.setAttribute('src', `${item.report}`);
                    report.setAttribute('id', `card-${i}-4`);
                    if(item.isDisabled[3] == true){
                        report.classList.add("opacityChange");
                    }
                    
                    detailFooter.appendChild(report);
                    card.appendChild(detailFooter);
            
                    }





    let alert_objects = obj.AlertArray;
    var alertContainer = document.getElementById("alert_list") as HTMLDivElement;
    for(let alert of alert_objects){
        const li = document.createElement("li");
        li.classList.add("alert_list_item");
      
        const msgdiv = document.createElement("div") as HTMLDivElement;
        msgdiv.classList.add("msg");
        li.appendChild(msgdiv);
      
        const p = document.createElement("p") as HTMLParagraphElement;
        p.innerHTML = alert.msg;
        msgdiv.appendChild(p);
      
        const img = document.createElement("img");
        if(alert.isNewAlert){
        img.src = "./icons/alerts.svg";
        li.style.backgroundColor="#FFFFEE";
        }
        else{
          img.src = "./icons/checkbox-checked.svg";
          img.setAttribute("id", "checkbox");
        }
        msgdiv.appendChild(img);
        if(alert.course!=""){
            const courseclassdiv = document.createElement("div");
            courseclassdiv.classList.add("class_course_alert");
            li.appendChild(courseclassdiv);
        
            const course_title = document.createElement("span");
            course_title.classList.add("class_or_course");
            course_title.classList.add("faded");
            course_title.innerHTML="Course: ";
            courseclassdiv.appendChild(course_title);
        
            const course_name = document.createElement("span");
            course_name.classList.add("class_course_name");
            course_name.innerHTML=alert.course;
            courseclassdiv.appendChild(course_name);
        }
      
        const date_time = document.createElement("span");
        date_time.classList.add("date-time");
        date_time.classList.add("faded");
        date_time.innerHTML = alert.date_time;
      
        li.appendChild(date_time);
        alertContainer.appendChild(li);
      }

      let announcement_objects = obj.AnnouncementArray;
      var announcement_list = document.getElementById("announcement_list") as HTMLDivElement;
      for(const announcement of announcement_objects){
        const li=document.createElement("li");
        li.classList.add("announcement_list_item");
        announcement_list.appendChild(li);
      
        const pa_header=document.createElement("div");
        pa_header.classList.add("pa_header");
        li.appendChild(pa_header);
      
        const header_p = document.createElement("p");
        pa_header.appendChild(header_p);
      
        const pa_title=document.createElement("span");
        pa_title.classList.add("pa_title");
        pa_title.innerHTML="PA: ";
        header_p.appendChild(pa_title);
      
        const pa_name=document.createElement("span");
        pa_name.classList.add("pa_name");
        pa_name.innerHTML= announcement.pa_name;
        header_p.appendChild(pa_name);
      
        const img=document.createElement("img");
        img.src="./icons/checkbox-checked.svg";
        pa_header.appendChild(img);
      
        const pa_msg=document.createElement("p");
        pa_msg.classList.add("pa_msg");
        pa_msg.innerHTML= announcement.msg;
        li.appendChild(pa_msg);
        
        const coursename=document.createElement("div");
        coursename.classList.add("class_course_announcement");
        li.appendChild(coursename);
      
        const course=document.createElement("span");
        course.classList.add("class_or_course");
        course.innerHTML="Course: "
        coursename.appendChild(course);
      
        const course_title=document.createElement("span");
        course_title.classList.add("class_course_name");
        course_title.innerHTML = announcement.course;
        coursename.appendChild(course_title);
      
        const pa_footer=document.createElement("div");
        pa_footer.classList.add("pa_footer");
        li.appendChild(pa_footer);
      
        const attachedfile=document.createElement("div");
        attachedfile.classList.add("attachedfile");
        pa_footer.appendChild(attachedfile);
      
        const attachimg=document.createElement("img");
        attachimg.src="./icons/file_attach.png";
        attachedfile.appendChild(attachimg);
      
        const no_of_file_attached=document.createElement("span");
        no_of_file_attached.innerHTML= announcement.no_of_file_attached+" Files Atteched";
        attachedfile.appendChild(no_of_file_attached);
      
      
        const date_time=document.createElement("span");
        date_time.classList.add("announcement_date_time");
        date_time.innerHTML=announcement.date_time;
        pa_footer.appendChild(date_time);
      
      
      }
    });

export{};
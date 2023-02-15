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
        // const item = cont[0];
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
                    // previewImg.setAttribute('onclick', 'changeOpacity(id)');
                    detailFooter.appendChild(previewImg);

                    let manageCourse = document.createElement("img");
                    manageCourse.setAttribute('src', `${item.manage_course}`);
                    manageCourse.setAttribute('id', `card-${i}-2`);
                    // manageCourse.setAttribute('onclick', 'changeOpacity(id)');
                    detailFooter.appendChild(manageCourse);

                    let grade = document.createElement("img");
                    grade.setAttribute('src', `${item.grade_submission}`);
                    grade.setAttribute('id', `card-${i}-3`);
                    // grade.setAttribute('onclick', 'changeOpacity(id)');
                    detailFooter.appendChild(grade);

                    let report = document.createElement("img");
                    report.setAttribute('src', `${item.report}`);
                    report.setAttribute('id', `card-${i}-4`);
                    // report.setAttribute('onclick', 'changeOpacity(id)');
                    detailFooter.appendChild(report);
                    card.appendChild(detailFooter);
            
                    }
    });

export{};
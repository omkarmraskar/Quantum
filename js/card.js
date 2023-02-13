

function isExpired(item){
    
    if(item == true){

        return "Expired";
    }
    else return "";
}

fetch('json/card.json').then(function(response){
    return response.json();
}).then(function (obj){
    let content = obj.card;

    let output = "";
    let i = 0;
    for(let item of content){
        i++;
        output += `
            <div class="card-${i} ${isExpired(item.expired)}">
                <div class="expired" id="expired-${i}"><span>${isExpired(item.expired)}</span></div>
                <div class="details">
                    <div class="image">
                        <img src="${item.image}" alt="${item.image}">
                    </div>
                    <div class="data">
                        <div class="name">
                            <span>${item.card_title}</span>
                            <img src="${item.favourite}" id="card-${i}-fav" onclick="favorite(id)">
                        </div>
                        <div class="subj">
                            <span>${item.subject}</span>
                            <span>${item.subject_divider}</span>
                            <span>${item.grade}</span>
                            <span>${item.grade_adder}</span>
                        </div>
                        <div class="syllabus">
                            <span class="no">${item.unit_no}</span>
                            <span class="text">${item.unit}</span>
                            <span class="no">${item.lesson_no}</span>
                            <span class="text">${item.lesson}</span>
                            <span class="no">${item.topic_no}</span>
                            <span class="text">${item.topic}</span>
                        </div>
                        <div class="teacher">
                            <select id="teacher">
                                <option value="${item.option_1}">${item.option_1}</option>
                                <option value="${item.option_2}">${item.option_2}</option>
                                <option value="${item.option_3}">${item.option_3}</option>
                                <option value="${item.option_4}">${item.option_4}</option>
                            </select>
                        </div>
                        <div class="student-duration">
                            <span>${item.student}</span>
                            <span>|</span>
                            <span>${item.duration}</span>
                        </div>
                    </div>
                </div>
                
                <div class="divider"></div>
                <div class="details-footer">
                    <img src="${item.preview_icon}" id="card-${i}-1" onclick="changeOpacity(id)">
                    <img src="${item.manage_course}" id="card-${i}-2" onclick="changeOpacity(id)">
                    <img src="${item.grade_submission}" id="card-${i}-3" onclick="changeOpacity(id)">
                    <img src="${item.report}" id="card-${i}-4" onclick="changeOpacity(id)">
                </div>
            </div>
        
        `;
    }
    document.querySelector(".content").innerHTML = output;
});
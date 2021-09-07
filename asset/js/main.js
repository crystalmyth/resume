document.addEventListener('DOMContentLoaded', () => {
    const experiences = [{
        "header": 'Dec 2020 - Apr 2021',
        "title": 'Truetech Services Pvt.Ltd.',
        "content": "I was working there as a project manager, working on their working websites and trying to finalize their upcoming website structure and guidelines.",
        "job": "Full Stack Developer",
    }, {
        "header": 'Jul 2020 - Dec 2020',
        "title": 'Protechno Media Pvt.Ltd.',
        "content": "I was working there a sr. laravel developer. I have worked there on client projects with my team.I had to finalize the projects according to requirements of client and prepare a achieveable deadlines ",
        "job": "SR. LARAVEL DEVELOPER",
    }, {
        "header": 'May 2019 - Jul 2020',
        "title": 'Denesaheatlh Pvt.Ltd.',
        "content": "it's a international healthcare firm where i worked as a full stack developer.I created their website from scratch on codeigniter also built some custom software for them.",
        "job": "FULL STACK DEVELOPER",
    }, {
        "header": 'Apr 2018 - may 2019',
        "title": 'Munishia Pvt. Ltd.',
        "content": "Minushia is a technical solution firm where i worked as PHP developer and worked on multiple client sites.",
        "job": "PHP DEVELOPER",
    }, ];
    const education = [{
        "header": '2018',
        "title": 'NAATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR',
        "content": "Bachelor of Technology, Computer Science.",
    }, ];
    const langs = [{
        'label': 'HTML',
        'percentage': '80%'
    }, {
        'label': 'CSS',
        'percentage': '80%'
    }, {
        'label': 'JQUERY',
        'percentage': '80%'
    }, {
        'label': 'BOOTSTRAP',
        'percentage': '80%'
    }, {
        'label': 'LARAVEL',
        'percentage': '70%'
    }, {
        'label': 'LIVEWIRE',
        'percentage': '80%'
    }, {
        'label': 'NUXT.JS',
        'percentage': '65%'
    }, {
        'label': 'DJANGO',
        'percentage': '65%'
    }, ];

    let experiences_list = document.querySelector('.experiences-list');
    let education_list = document.querySelector('.education-list');
    let lang_list = document.querySelector('.lang-list');
    let scroll_down = document.querySelector('.scroll-down');

    ExperiencesListBuild(experiences);
    EducationListBuild(education);
    LangListBuild(langs);


    document.addEventListener('click', () => {
        var elmnt = document.querySelector(".section-3");
        elmnt.scrollIntoView();
    });


    function ExperiencesListBuild(data) {
        for (var i = 0; i < data.length; i++) {
            var box = `<div class="listing">
                        <div class="list-box">
                            <p class="header">` + data[i].header + `</p>
                            <h3>` + data[i].title + `</h3>
                            <span>` + data[i].content + `</span><br/>
                            <small class="text-right w-100 d-block pr-3 py-2">- ` + data[i].job + `</small>
                        </div>
                    </div>`;
            experiences_list.innerHTML += box;
        }
    }

    function EducationListBuild(data) {
        for (var i = 0; i < data.length; i++) {
            var box = `<div class="listing">
                        <div class="list-box">
                            <p class="header">` + data[i].header + `</p>
                            <h3>` + data[i].title + `</h3>
                            <span>` + data[i].content + `</span>
                        </div>
                    </div>`;
            education_list.innerHTML += box;
        }
    }

    function LangListBuild(data) {
        for (var i = 0; i < data.length; i++) {
            var box = `<div class="col-sm-6">
                        <div class="box">
                            <div class="header">
                                <label class = "label"> ` + data[i].label + ` </label>
                                <label>(` + data[i].percentage + `)</label>
                            </div>
                            <div class="progress">
                                <div class = "progress-bar"
                                role = "progressbar"
                                style = "width: ` + data[i].percentage + `"
                                aria - valuenow = "80"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>`;
            lang_list.innerHTML += box;
        }
    }
})
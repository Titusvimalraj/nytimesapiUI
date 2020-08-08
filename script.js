let apiKey = `pqiWEDtWRSel2sbZpjoGfGA95tlGZ2aq`

let htmlParentElements = () => {
    let parentsElementsInnerHtml = `<div class="container-fluid">
    <h1>New York Times Top Stories API</h1>
    <div class="row">
        <div class="col-12 mt-5">
            <div class="accordion" id="nytimesAccordion">
            </div>

            </div>
        </div>

    </div>`

    document.body.innerHTML = parentsElementsInnerHtml;
}

htmlParentElements();


let loadInitialParents = () => {
    let parentsInnerHTML = '';

    let sectionsNamesArr = [
        'arts',
        'automobiles',
        'books',
        'business',
        'fashion',
        'food',
        'health',
        'home',
        'insider',
        'magazine',
        'movies',
        'nyregion',
        'obituaries',
        'opinion',
        'politics',
        'realestate',
        'science',
        'sports',
        'sundayreview',
        'technology',
        'theater',
        't-magazine',
        'travel',
        'upshot',
        'us',
        'world'
    ];

    sectionsNamesArr.forEach(element => {
        let innerAccordionHtml = ` <div class="card">
        <div class="card-header" id="${element}">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#${element}Collapse" aria-expanded="true" aria-controls="${element}Collapse" onclick="getNewsData('${element}');">
                ${element}
          </button>
            </h2>
        </div>
    
        <div id="${element}Collapse" class="collapse row show" aria-labelledby="${element}" data-parent="#nytimesAccordion">
        
        </div>
        </div>
        `;

        parentsInnerHTML += innerAccordionHtml;
    })

    document.getElementById('nytimesAccordion').innerHTML = parentsInnerHTML;

}

loadInitialParents();


let getNewsData = async(sectionName) => {
    try {

        let url = `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${apiKey}`;

        let response = await fetch(url);

        let data = await response.json();

        //console.log(data);



        let accordionCollapseContent = '';

        if (data.results.length > 0) {
            let newCardInfo = data.results;
            //console.log(newCardInfo);

            for (let i = 0; i < newCardInfo.length; i++) {
                let imgSrc = '';
                if (newCardInfo[i].hasOwnProperty('multimedia') && newCardInfo[i]['multimedia'] != null) {
                    //console.log(i);
                    //console.log(newCardInfo[i].multimedia);
                    imgSrc = newCardInfo[i].multimedia[1].url;
                }

                let currentCollapseData = `    <div class="col-8 offset-2 offset-lg-0 col-lg-6 mt-4">
                    <div class="card mb-3">
                    ${sectionName}
                        <div class="row no-gutters">
                            
                            <div class="col-md-4 order-md-1">
                                <img src="${imgSrc}" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${newCardInfo[i].title}</h5>
                                    <p class="card-text"><small class="text-muted">${new Date(newCardInfo[i].published_date).toDateString()}</small></p>
                                    <p class="card-text">${newCardInfo[i].abstract}</p>
                                    
                                    <a href="${newCardInfo[i].short_url}" class="card-link">Continue Reading</a>
                                </div>
    
                                
                            </div>                        
                        </div>
                    </div>
                </div>`;

                accordionCollapseContent += currentCollapseData;

            }

            document.getElementById(`${sectionName}Collapse`).innerHTML = accordionCollapseContent;

        }







    } catch (error) {
        let errorElement = document.createElement('div');
        errorElement.className = `alert alert-warning alert-dismissible fade show`;
        errorElement.Role = `alert`;
        errorElement.tabIndex = 10;
        errorElement.innerHTML = `<strong>Error!</strong> ${error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        document.getElementById(`${sectionName}Collapse`).appendChild(errorElement);
    }


}



let getFirstData = async(sectionName = 'arts') => {
    try {

        let url = `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${apiKey}`;

        let response = await fetch(url);

        let data = await response.json();

        //console.log(data);



        let accordionCollapseContent = '';

        if (data.results.length > 0) {
            let newCardInfo = data.results;
            //console.log(newCardInfo);

            for (let i = 0; i < newCardInfo.length; i++) {
                let imgSrc = '';
                if (newCardInfo[i].hasOwnProperty('multimedia') && newCardInfo[i]['multimedia'] != null) {
                    //console.log(i);
                    //console.log(newCardInfo[i].multimedia);
                    imgSrc = newCardInfo[i].multimedia[1].url;
                }

                let currentCollapseData = `    <div class="col-8 offset-2 offset-lg-0 col-lg-6 mt-4">
                    <div class="card mb-3">
                    ${sectionName}
                        <div class="row no-gutters">
                            
                            <div class="col-md-4 order-md-1">
                                <img src="${imgSrc}" class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${newCardInfo[i].title}</h5>
                                    <p class="card-text"><small class="text-muted">${new Date(newCardInfo[i].published_date).toDateString()}</small></p>
                                    <p class="card-text">${newCardInfo[i].abstract}</p>
                                    
                                    <a href="${newCardInfo[i].short_url}" class="card-link">Continue Reading</a>
                                </div>
    
                                
                            </div>                        
                        </div>
                    </div>
                </div>`;

                accordionCollapseContent += currentCollapseData;

            }

            document.getElementById(`${sectionName}Collapse`).innerHTML = accordionCollapseContent;

        }







    } catch (error) {
        let errorElement = document.createElement('div');
        errorElement.className = `alert alert-warning alert-dismissible fade show`;
        errorElement.Role = `alert`;
        errorElement.tabIndex = 10;
        errorElement.innerHTML = `<strong>Error!</strong> ${error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        document.getElementById(`${sectionName}Collapse`).appendChild(errorElement);
    }


}


getFirstData();
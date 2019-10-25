const bannerList = Array.from(document.querySelectorAll(".banner-list li"));
const indicatorsList = Array.from(document.querySelectorAll(".banner-indicators li"));

const backgroundChanger = (indexer) => {
    const currentIndicator = indicatorsList[indexer];
    const currentBanner = bannerList[indexer];

    for (let index = 0; index < indicatorsList.length; index++) {
        const indicator = indicatorsList[index];
        const banner = bannerList[index];
        
        indicator.classList.remove("active");
        banner.classList.remove("appear");
    }     

    currentIndicator.classList.add("active");
    currentBanner.classList.add("appear");
}

indicatorsList.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        for (let index = 0; index < indicatorsList.length; index++) {
            const indicator = indicatorsList[index];
            const banner = bannerList[index];
            
            indicator.classList.remove("active");
            banner.classList.remove("appear");
        }    
        
        e.target.classList.add('active');
        bannerList[index].classList.add('appear');
    })
});

let index = 0;
backgroundChanger(index);
setInterval(() => {
    if (index == 2) index = 0;
    else index++;
    backgroundChanger(index);
}, 5000)
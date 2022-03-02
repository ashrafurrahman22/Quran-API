// const searchValue = document.getElementById('inputField').value ;
const displayDiv = document.getElementById('displayDiv')


const loadSurah = () => {
     
    // console.log(searchValue);
    const url = `http://api.alquran.cloud/v1/quran/%7B%7Bedition%7D%7D`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySurah(data.data.surahs));
}

const displaySurah = surahs => {
    surahs.forEach(surah => {
            console.log(surah);
            const newDiv = document.createElement('div');
            newDiv.classList.add('col');
            newDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
  <div class="card-body px-4 py-3 rounded">
    <h5 class="card-title">Surah Number: ${surah.number}</h5>
    <h5 class="card-title">English-Name: ${surah.englishName}</h5>
    <h5 class="card-title">Name-Meaning: ${surah.englishNameTranslation}</h5>
    <h5 class="card-title">Arabic-Name: ${surah.name}</h5>
    <h5 class="card-title">Revelation: ${surah.revelationType}</h5>
    <button class="btn btn-outline-secondary ms-3" type="button" id="button-addon2">Read>></button>
  </div>
</div>
`;
            displayDiv.appendChild(newDiv);
    })
}
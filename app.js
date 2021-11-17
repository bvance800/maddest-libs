data = {
    madLibIndex: 0,
    totalMadLibs: 2,
    title: 'Maddest Libs',
    isLoading: false,
    input_fields: [
        'name',
        'noun',
        'verb',
        'adjective',
        'adverb'
    ]
}

const app = Vue.createApp({
    //data, functions, template
    data(){
        return data
    },
    methods:{
        generateMadLib,
    }
})

function capitalizeFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateMadLib(){
    for(let i = 0; i < data.input_fields.length; i++){
        let generatedWordID = data.input_fields[i]+"-place";
        let generatedWordPlaceList = document.getElementsByClassName(generatedWordID);
        let inputFieldValue = document.getElementById(data.input_fields[i]).value;

        for(let j = 0; j < generatedWordPlaceList.length; j++){
            if(inputFieldValue){
                
                generatedWordPlaceList[j].innerHTML = inputFieldValue;
            }
            else {
                generatedWordPlaceList[j].innerHTML = "____";
            }

        }
    }

    showRandomMadLib();
}

function showRandomMadLib(){

    let madLibList = document.getElementsByClassName("mad-lib");

    
    // for(let i = 0; i < madLibList.length; i++){
    //     madLibList[i].classList.add("notActive");
    // }
    let previousMadLibIndex = data.madLibIndex;
    data.madLibIndex++;
    data.madLibIndex =  data.madLibIndex % data.totalMadLibs;
    // console.log("Curr: " + data.madLibIndex + " Prev: " + previousMadLibIndex);

    madLibList[data.madLibIndex].classList.remove("notActive");
    madLibList[data.madLibIndex].classList.add("mad-lib-enter");
    madLibList[data.madLibIndex].classList.remove("mad-lib-exit");

    madLibList[previousMadLibIndex].classList.add("mad-lib-exit");
    madLibList[previousMadLibIndex].classList.remove("mad-lib-enter");

}


app.mount('#app')

import React, { Component } from 'react';


var dataList = [{
    index: 0, CatName: "Boots", CatNickName: "cap", CatCliks: 0, CatImage: "http://placekitten.com/g/200/300", CatAge: "Infant"
}, {
    index: 1, CatName: "Kidoos", CatNickName: "fal", CatCliks: 6, CatImage: " https://loremflickr.com/320/240?lock=350", CatAge: "Child"
}, {
    index: 2, CatName: "Loona", CatNickName: "panth", CatCliks: 13, CatImage: "http://placekitten.com/g/400/400", CatAge: "Young"
}, {
    index: 3, CatName: "Chinni", CatNickName: "wolf", CatCliks: 26, CatImage: "https://loremflickr.com/320/240?lock=4", CatAge: "Middle-Age"
}, {
    index: 4, CatName: "Ricky", CatNickName: "ironman", CatCliks: 41, CatImage: "https://loremflickr.com/320/240?lock=5", CatAge: "Old"
}, {
    index: 5, CatName: "Tabby", CatNickName: "scar", CatCliks: 61, CatImage: "http://placekitten.com/g/900/900", CatAge: "Very Old"
}, {
    index: 6, CatName: "Tiger", CatNickName: "ant", CatCliks: 6, CatImage: "https://loremflickr.com/320/240?lock=250", CatAge: "Child"
}, {
    index: 7, CatName: "Loona2", CatNickName: "vision", CatCliks: 13, CatImage: "https://loremflickr.com/320/240?lock=7", CatAge: "Young"
}, {
    index: 8, CatName: "Boots2", CatNickName: "hawke", CatCliks: 26, CatImage: "http://placekitten.com/g/800/900", CatAge: "Middle-Age"
}, {
    index: 9, CatName: "Ricky2", CatNickName: "spide", CatCliks: 41, CatImage: "https://loremflickr.com/320/240?lock=3", CatAge: "Old"
}, {
    index: 10, CatName: "Tiger5", CatNickName: "hulk", CatCliks: 61, CatImage: "https://loremflickr.com/320/240?lock=1", CatAge: "Very Old"
},]

class MainComponent extends Component {

    render() {

        return (
            <div>

                {dataList.map((data) => <img src={data.CatImage} />)}
            </div>
        );
    }
}

export default MainComponent;
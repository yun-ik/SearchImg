import { observable, action, computed, makeObservable, toJS } from 'mobx';

class imgSearch {

    constructor() {
        makeObservable(this);
    }

    @observable
    _query = ""// 검색 질의어

    @observable
    _documents = [] // title, contents url, datetime

    get query() {
        return this._query;
    }

    @computed
    get documents() {
        return toJS(this._documents);
    }

    @action
    setQuery(query){
        this._query = query
    }

    @action
    setApi(){
        const query = this._query;
        const key = "4ba362ca125b65a7c325f639a6883cd5";

        fetch(`https://dapi.kakao.com/v2/search/image?query=${query}`, {
            headers: {
                Authorization: `KakaoAK ${key}`
            }
        })
            .then((response) => response.json())
            .then((json) => {
                this._documents = json.documents;
                //console.log(toJS(this._documents))
            })
     }
     
}


export default new imgSearch();
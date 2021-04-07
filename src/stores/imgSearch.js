import { observable, action, computed, makeObservable, toJS } from 'mobx';

class imgSearch {

    constructor() {
        makeObservable(this);
    }

    @observable
    _query = "";// 검색 질의어

    @observable
    _documents = []; // title, contents url, datetime

    @observable
    _nowpage = 1;

    @observable
    _pageCount = {
        startpage: 1,
        endpage: 5,
        page: []
    };

    get query() {
        return this._query;
    }

    @computed
    get documents() {
        return toJS(this._documents);
    }

    @computed
    get nowpage() {
        return this._nowpage;
    }

    @computed
    get pageCount() {
        return toJS(this._pageCount);
    }

    @action
    setQuery(query) {
        this._query = query
    }

    @action
    setApi() {
        const query = this._query;
        const key = "4ba362ca125b65a7c325f639a6883cd5";
        const page = this._nowpage;

        fetch(`https://dapi.kakao.com/v2/search/image?query=${query}&page=${page}&size=50`, {
            headers: {
                Authorization: `KakaoAK ${key}`
            }
        })
            .then((response) => response.json())
            .then((json) => {
                this._documents = json.documents;
            }).then(
                this.pageNation(this._pageCount.startpage, this._pageCount.endpage)
            )
    }

    @action
    pageNation(page, endpage) {
        this._pageCount.page = [];
        for (page; page <= endpage; page++) {
            this._pageCount.page.push({ 'page': page });
            console.log('page='+page)
        }
        console.log('now='+this._nowpage)
    }

    @action
    NextpageNation() {
        let startpage = this._pageCount.startpage;
        let endpage = this._pageCount.endpage;

        if (startpage === 46) {
            this._pageCount.startpage = startpage;
            this._pageCount.endpage = endpage;
        } else {
            this._pageCount.startpage = startpage + 5;
            this._pageCount.endpage = endpage + 5;
            this._nowpage = this._pageCount.startpage;
            this.setApi();
        }
    }

    @action
    PrepageNation() {
        let startpage = this._pageCount.startpage;
        let endpage = this._pageCount.endpage;

        if (startpage === 1) {
            this._pageCount.startpage = startpage;
            this._pageCount.endpage = endpage;
        } else {
            this._pageCount.startpage = startpage - 5;
            this._pageCount.endpage = endpage - 5;
            this._nowpage = this._pageCount.startpage;
            this.setApi();
        }
    }

    @action
    setNowPage(page) {
        this._nowpage = page;
        this.setApi();
    }
}


export default new imgSearch();
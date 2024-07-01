


export class CharacterFileReader {

    name = "";
    title = "";
    imageURL = "";
    infoRowItems = [];
    pages = [];
    pagesReady = 0;
    ready = false;

    onInitLoad() {
        return false;
    }

    onPageLoad() {
        return false;
    }

    onAllPagesLoaded() {
        return false;
    }



    init(raw) {
        let rawArray = raw.split(/\r?\n-+\r?\n/);
        let nameArray = rawArray[0].split("\n");
        let infoRowArray = rawArray[1].split("\n");
        let pagesArray = rawArray[2].split("\n");

        this.name = nameArray[0];
        this.title = nameArray[1];
        this.imageURL = nameArray[2];

        infoRowArray.map((raw) => this.#addInfoRow(raw));
        pagesArray.map((raw) => this.#addPage(raw));
    }

    exportBrief() {
        let result = new Map();
        result.set("name", this.name);
        result.set("title", this.title);
        result.set("imageURL", this.imageURL);
        result.set("infoRows", this.infoRowItems);
        return result;
    }

    readPage(index, raw) {
        this.pages[index].raw = raw;
        this.pagesReady++;
        if (this.pagesReady == this.pages.length) {
            this.ready = true;
            this.prunePages();
            this.onAllPagesLoaded();
        }
    }

    errorPage(index) {
        this.pages[index].raw = "";
        this.pages[index].fail = true;
        this.pagesReady++;
        console.log(this.pages);
        if (this.pagesReady == this.pages.length) {
            this.ready = true;
            this.prunePages();
            this.onAllPagesLoaded();
        }
    }

    prunePages() {
        for (let i = this.pages.length - 1; i >= 0; i--) {
            if (this.pages[i].fail) {
                this.pages.splice(i,1);
                console.log(this.pages);
            }
        }
    }

    exportPages() {
        let result = this.pages;
        result[0].selected = true;
        return result;
    }



    #addInfoRow(raw) {
        let infoRowItemArray = raw.split(":");
        let len = this.infoRowItems.length;
        this.infoRowItems[len] = {icon: infoRowItemArray[0], content: infoRowItemArray[1]};
    }

    #addPage(raw) {
        let pageArray = raw.split(":");
        let len = this.pages.length;
        this.pages[len] = {name: pageArray[0], icon:pageArray[1]};
    }
}
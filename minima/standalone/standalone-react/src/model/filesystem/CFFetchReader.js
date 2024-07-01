import {CharacterFileReader} from './CharacterFileReader.js';

export class CFFetchReader extends CharacterFileReader {

    initFetch(filepath) {

        let cfr = this;

        fetch(filepath).then(
            res => {if (res.ok) {
                res.text().then(
                    data => {
                        cfr.init(data);
                        this.onInitLoad();
                    }
                );
            }}
        );
    }

    readPageFetch(index, filepath) {

        let cfr = this;

        fetch(filepath).then(
            res => {
                console.log("res get");
                if (res.ok) {
                    res.text().then(
                        data => {
                            cfr.readPage(index, data);
                            cfr.onPageLoad();
                        },
                        data => {
                            cfr.errorPage(index);
                        }
                    );
                } else {
                    console.log("res not ok");
                    cfr.errorPage(index);
                }
            },
            res => {
                console.log("fail");
                cfr.errorPage(index);
            }
        );

    }

}
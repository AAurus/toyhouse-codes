import {CharacterFileReader} from './CharacterFileReader.js';

export class CFFrameReader extends CharacterFileReader {

    initFrame(frame) {
        let raw = CFFrameReader.readFromFrame(frame);
        if (raw) {
            this.init(raw);
            this.onInitLoad();
        } else {
            alert("Read Failed");
        }
    }

    readPageFrame(index, frame) {
        let raw = CFFrameReader.readFromFrame(frame);
        if (frame) {
            this.readPage(index, raw);
        }
    }

    static readFromFrame(frame) {
        if (frame) {
            if (frame.contentWindow) {
                return frame.contentWindow.document.body.innerText;
            } else if (frame.contentDocument) {
                return frame.contentDocument.body.innerText;
            }
        }
        return null;
    }

}
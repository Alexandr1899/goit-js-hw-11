export default class LoadMoreBtn {
    constructor({ ref, hide } = {}) {
        this.btn = ref;
        hide ? this.hide() : this.show();
    }

    show() {
        this.btn.classList.remove("visually-hidden")
    }

    hide() {
        this.btn.classList.add("visually-hidden")
    }
}
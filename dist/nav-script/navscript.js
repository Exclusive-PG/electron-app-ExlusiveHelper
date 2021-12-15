"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const systemPage_1 = require("../render/systemPage");
const lengthCards = document.querySelectorAll(".wave-card").length;
const NodeListCards = document.querySelectorAll(".wave-card");
NodeListCards.forEach((item) => {
    let currentData = '';
    item.addEventListener("click", () => {
        if (item.hasAttribute("data-card-nav")) {
            //  console.log(item.getAttribute("data-card-nav"))
            switch (item.getAttribute("data-card-nav")) {
                case "system":
                    if (currentData !== item.getAttribute("data-card-nav")) {
                        currentData = item.getAttribute("data-card-nav");
                        getActiveSystemPage();
                        (0, systemPage_1.renderSystemPage)();
                    }
                    else {
                        getActiveSystemPage();
                        return;
                    }
                    break;
            }
            (0, systemPage_1.enableLinkDataCards)(document.querySelectorAll(`.card-system-all`));
            getBtnBack();
        }
    });
});
const getBtnBack = () => {
    document.querySelector(".btnBack").addEventListener("click", () => {
        document.querySelector(".RenderContent").classList.remove("renderContentActive");
    });
};
const getActiveSystemPage = () => {
    document.querySelector(".RenderContent").classList.add("renderContentActive");
};
//# sourceMappingURL=navscript.js.map
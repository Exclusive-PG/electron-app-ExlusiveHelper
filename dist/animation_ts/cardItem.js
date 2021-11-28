"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoverCardEffect = void 0;
const hoverCard = (event) => {
    const halfHeight = event.offsetHeight / 2;
    event.style.transform = `rotateX(${event.offsetY} deg)`;
};
const hoverCardEffect = () => {
    document.querySelectorAll(".item").forEach(item => {
        item.addEventListener("mousemove", (event) => {
            const halfHeight = item.offsetHeight / 2;
            const halfWidth = item.offsetWidth / 2;
            item.style.transform = `rotateX(${-(event.offsetY - halfHeight) / 6}deg)
            rotateY(${-(event.offsetX - halfWidth) / 6}deg)
            `;
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    });
};
exports.hoverCardEffect = hoverCardEffect;
//# sourceMappingURL=cardItem.js.map
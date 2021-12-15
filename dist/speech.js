/* @ts-ignore */
const speech = new Artyom();
const Name = "Dmitriy";
speech.initialize({
    lang: "ru-RU",
    continuous: true,
    listen: true,
    debug: false,
    speed: 1 // talk normally
}).then(function () {
    setTimeout(() => {
        speech.say(`Привет ${Name}`);
    }, 1000);
});
//# sourceMappingURL=speech.js.map
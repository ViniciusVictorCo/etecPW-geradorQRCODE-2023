const image = document.querySelector("#img"),
iframe = document.querySelector("#iframe"),
input = document.querySelector("#txt"),
button = document.querySelector("#btn"),
api = `https://api.qrserver.com/v1/`,
api2 = `create-qr-code/?size=250x250&data=`;

button.addEventListener("click", () => {
    image.src = `${api}${api2}${input.value}`;
    iframe.src = `${input.value}`;
});

window.onload = function () 
{
    window.setInterval(function () {
        let DATE = new Date();

        let h = DATE.getHours();
        let m = DATE.getMinutes();
        let s = DATE.getSeconds();

        if (h < 10) h = '0' + h;
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;

        let clockString = `${h}:${m}:${s}`;
        let colorString = `#${h}${m}${s}`;

        clock.textContent = clockString;
        color.textContent = colorString;

        document.body.style.backgroundColor = colorString;
    });
}
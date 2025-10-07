function replaceTwitterEmoji() {
    const emoji = document.querySelectorAll(
        'img[src*="abs-0.twimg.com/emoji"]:not(.twemojified), ' +
        'img[src*="abs.twimg.com/emoji"]:not(.twemojified)'
    );

    for (const e of emoji) {
        const alt = e.alt;
        if (!alt) continue;

        e.classList.add('twemojified');
        e.setAttribute('old-src', e.src);
        e.onerror = () => { e.src = e.getAttribute('old-src'); };

        const codepoints = twemoji.convert.toCodePoint(alt);
        e.src = `${twemoji.base}${twemoji.size}/${codepoints}${twemoji.ext}`;
    }
}

window.twemojifyExt = replaceTwitterEmoji
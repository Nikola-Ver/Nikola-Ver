const colors = require('colors');
console.clear();

async function writeToConsole({ text, delay, cursorPos }) {
    return new Promise((res, rej) => {  
        // res(); // if you want to see the result without animation, uncomment
        setTimeout(() => { res() }, delay);
    }).then(() => {
        if (cursorPos !== undefined) {
            process.stdout.cursorTo(cursorPos);
            process.stdout.write(' ');
            process.stdout.cursorTo(cursorPos);
            return;
        }

        process.stdout.write(text);
        return;
    });
}

const arrOfTexts = [
    { text: 'Nikola-Ver@Readme:'.green + '~'.cyan + '$ ', delay: 100 },
    { text: 'n', delay: 2000 },
    { text: 'p', delay: 300 },
    { text: 'm', delay: 150 },
    { text: ' ', delay: 100 },
    { text: 'r', delay: 100 },
    { text: 'u', delay: 100 },
    { text: 'n', delay: 150 },
    { text: ' ', delay: 100 },
    { text: 'r', delay: 200 },
    { text: 'e', delay: 100 },
    { text: 'a', delay: 130 },
    { text: 'd', delay: 120 },
    { text: 'm', delay: 300 },
    { text: 'e', delay: 150 },
    { text: '\n\n', delay: 1000 },
    { text: 'H', delay: 540 },
    { text: 'i', delay: 170 },
    { delay: 1500, cursorPos: 1 },
    { delay: 230, cursorPos: 0 },
    { text: 'H', delay: 50 },
    { text: 'e', delay: 70 },
    { text: 'l', delay: 50 },
    { text: 'l', delay: 60 },
    { text: 'o', delay: 50 },
    { text: ',', delay: 100 },
    { text: ' ', delay: 400 },
    { text: 'm', delay: 80 },
    { text: 'y', delay: 50 },
    { text: ' ', delay: 70 },
    { text: 'n', delay: 60 },
    { text: 'a', delay: 50 },
    { text: 'm', delay: 80 },
    { text: 'e', delay: 90 },
    { text: ' ', delay: 60 },
    { text: 'i', delay: 50 },
    { text: 's', delay: 90 },
    { text: ' ', delay: 50 },
    { text: 'K', delay: 70 },
    { text: 'o', delay: 60 },
    { text: 'l', delay: 50 },
    { text: 'y', delay: 70 },
    { text: 'a', delay: 60 },
    { delay: 2500, cursorPos: 22 },
    { delay: 80, cursorPos: 21 },
    { delay: 70, cursorPos: 20 },
    { delay: 60, cursorPos: 19 },
    { delay: 50, cursorPos: 18 },
    { text: 'N', delay: 50 },
    { text: 'i', delay: 70 },
    { text: 'k', delay: 80 },
    { text: 'o', delay: 50 },
    { text: 'l', delay: 90 },
    { text: 'a', delay: 50 },
    { text: 'y', delay: 50 },
    { text: ' ', delay: 70 },
    { text: 'V', delay: 90 },
    { text: 'e', delay: 100 },
    { text: 'r', delay: 90 },
    { text: 'e', delay: 70 },
    { text: 's', delay: 70 },
    { text: 'h', delay: 50 },
    { text: 'c', delay: 70 },
    { text: 'h', delay: 80 },
    { text: 'a', delay: 70 },
    { text: 'g', delay: 60 },
    { text: 'i', delay: 50 },
    { text: 'n', delay: 50 },
    { text: '\n', delay: 120 },
    { text: '\n', delay: 120 },
    { text: 'I am:'.underline, loopDelay: 100 },
    { text: '\n', delay: 220 },
    { text: '• student of ' + 'BSUIR'.cyan + ', specializing in ' + 'ITS'.green, loopDelay: 80 },
    { text: '\n', delay: 220 },
    { text: '• full stack developer:', loopDelay: 80 },
    { text: '\n', delay: 120 },
    { text: '  ◦ ' + 'Node'.green, loopDelay: 80 },
    { text: ', ' + 'Java'.yellow, loopDelay: 80 },
    { text: ', ' + 'Python'.cyan + ' - back', loopDelay: 80 },
    { text: '\n', delay: 120 },
    { text: '  ◦ ' + 'React'.cyan, loopDelay: 80 },
    { text: ', ' + 'Vue'.green, loopDelay: 80 },
    { text: ', ' + 'jQuery'.yellow + ' - front', loopDelay: 80 },
    { text: '\n', delay: 120 },
    { text: '  ◦ Webpack', loopDelay: 80 },
    { text: '\n', delay: 120 },
    { text: '  ◦ etc', loopDelay: 80 },
    { text: '\n', delay: 120 },
    { text: '\n', delay: 120 },
    { text: 'I love programming for myself and writing beautiful readable code\nYou can find interesting applications in my repositories\n\n', loopDelay: 50 },
    { text: 'Also, you can find the code of this program', loopDelay: 50 },
    { text: '', delay: 800 },
    { text: '. Thanks for watching', loopDelay: 50 },
    { text: '', delay: 800 },
    { delay: 60, fromToPos: [63, 42] },

    { text: '', delay: 3600000 } // so that the title of the window does not change
];

(async () => {
    for (let index = 0; index < arrOfTexts.length; index++) {
        if (arrOfTexts[index].loopDelay !== undefined) {
            const { text, loopDelay } = arrOfTexts[index];
            for (let i = 0; i < text.length; i++) {
                await writeToConsole({ text: text[i], delay: loopDelay });
            }
        } else if (arrOfTexts[index].fromToPos !== undefined) {
            const { fromToPos, delay } = arrOfTexts[index];
            for (let current = fromToPos[0]; current > fromToPos[1]; current--) {
                await writeToConsole({ delay, cursorPos: current });
            }
        } else {
            await writeToConsole(arrOfTexts[index]);
        }
    }
})();

const itemsEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemsEl.length}`);


itemsEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const listEL = item.lastElementChild;
    console.log(`Element: ${listEL.children.length}`);
});
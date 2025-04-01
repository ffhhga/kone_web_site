document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".block a");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const newUrl = prompt("请输入新的网址链接：", link.href);
            const newTitle = prompt("请输入新的网址标题：", link.querySelector("span").textContent);

            if (newUrl && newTitle) {
                link.href = newUrl;
                link.querySelector("span").textContent = newTitle;
            }
        });
    });
});

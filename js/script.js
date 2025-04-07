document.addEventListener("DOMContentLoaded", function () {
    // ✅ 复制折扣码功能
    document.querySelectorAll(".copyButton").forEach(button => {
        button.addEventListener("click", function () {
            const codeId = this.getAttribute("data-code");
            const codeInput = document.getElementById(codeId);
            if (codeInput) {
                codeInput.select();
                codeInput.setSelectionRange(0, 99999); // For mobile

                if (navigator.clipboard) {
                    navigator.clipboard.writeText(codeInput.value).then(() => {
                        alert("Copied:" + codeInput.value);
                    }).catch(err => {
                        console.error("Clipboard write failed", err);
                    });
                } else {
                    document.execCommand("copy");
                    alert("Copied:" + codeInput.value);
                }
            }
        });
    });

    // ✅ 折叠菜单切换 + 点击空白关闭
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        // 点击按钮切换菜单显示
        menuToggle.addEventListener("click", function (e) {
            e.stopPropagation(); // 防止事件冒泡
            navLinks.classList.toggle("active");
        });

        // 点击菜单内部链接不要关闭（可选）
        navLinks.addEventListener("click", function (e) {
            e.stopPropagation();
        });

        // 点击页面其他区域关闭菜单
        document.addEventListener("click", function () {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    }
});

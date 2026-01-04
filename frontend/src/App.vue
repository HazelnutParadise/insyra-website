<template>
    <div id="app">
        <!-- Navigation -->
        <Navbar
            @language-changed="updateLanguage"
            :currentMessages="currentMessages"
            :current-language="currentLanguage"
            @page-selected="selectPage"
        />
        <component :is="currentPage" :currentMessages="currentMessages" />
        <HazelnutParadiseNav />
        <!-- Footer -->
        <footer class="footer">
            <p>© 2024 HazelnutParadise. All Rights Reserved.</p>
            <ul class="social-links">
                <li>
                    <a
                        href="https://github.com/HazelnutParadise"
                        style="display: flex; align-items: baseline; gap: 5px"
                        ><i
                            class="fa fa-github"
                            style="font-size: 16px; color: #fff"
                        ></i
                        ><span>GitHub</span></a
                    >
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import HazelnutParadiseNav from "./components/HazelnutParadiseNav.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue"; // 引入漢堡選單
import { ref, shallowRef, onMounted } from "vue";
import { messages } from "./locales/lang"; // 引入語言資源
import Main from "./views/Main.vue";
import WhatIsInsyra from "./views/WhatIsInsyra.vue";
import Features from "./views/Features.vue";
import HowToUse from "./views/HowToUse.vue";
import Idensyra from "./views/Idensyra.vue";
import WhyInsyra from "./views/WhyInsyra.vue";
import Contact from "./views/Contact.vue";

export default {
    name: "App",
    components: {
        HazelnutParadiseNav,
        Navbar,
        LanguageSelector,
        HamburgerMenu, // 註冊漢堡選單
    },
    setup() {
        const initials = ["繁體中文", "English"];
        // If the server injected initial messages/lang into the page (window.__INITIAL_MESSAGES / window.__INITIAL_LANG),
        // prefer those to avoid client-side flash and to keep head/heading consistent with server output.
        const serverInitialMessages =
            typeof window !== "undefined" && window.__INITIAL_MESSAGES
                ? window.__INITIAL_MESSAGES
                : null;
        const serverInitialLang =
            typeof window !== "undefined" && window.__INITIAL_LANG
                ? window.__INITIAL_LANG
                : null;

        let initialLanguage =
            serverInitialLang || localStorage.getItem("language");

        if (!initialLanguage) {
            const browserLang = navigator.language || navigator.userLanguage;
            initialLanguage = browserLang.toLowerCase().includes("zh")
                ? "繁體中文"
                : "English";
            localStorage.setItem("language", initialLanguage);
        }
        const currentLanguage = ref(initialLanguage); // 預設選擇繁體中文
        // Prefer server provided messages when available (injected by /p/:page)
        const currentMessages = ref(
            serverInitialMessages || messages[currentLanguage.value],
        ); // 當前語言的文本
        const currentPage = shallowRef(Main); // 當前顯示的組件 (use shallowRef to avoid making the component itself reactive)
        const applyYear = (str) =>
            str ? str.replace("{year}", new Date().getFullYear()) : str;
        document.title = applyYear(currentMessages.value.siteTitle);

        const updateTitle = (pageName) => {
            const pageTitle = currentMessages.value.pageTitle?.[pageName] || "";
            const siteTitle = applyYear(currentMessages.value.siteTitle);
            document.title = pageTitle
                ? `${pageTitle} - ${siteTitle}`
                : siteTitle;
        };

        const updateLanguage = (lang) => {
            if (messages[lang]) {
                currentLanguage.value = lang;
                currentMessages.value = messages[lang]; // 更新當前語言的文本
                // 根據當前頁面更新 title
                const currentPageName =
                    currentPage.value === Main
                        ? "Main"
                        : currentPage.value === WhatIsInsyra
                          ? "WhatIsInsyra"
                          : currentPage.value === Features
                            ? "Features"
                            : currentPage.value === HowToUse
                              ? "HowToUse"
                              : currentPage.value === Idensyra
                                ? "Idensyra"
                                : currentPage.value === WhyInsyra
                                  ? "WhyInsyra"
                                  : currentPage.value === Contact
                                    ? "Contact"
                                    : "Main";
                updateTitle(currentPageName);
            } else {
                console.error(`Language ${lang} not found in messages.`);
            }
        };

        const selectPage = (page) => {
            switch (page) {
                case "Main":
                    currentPage.value = Main;
                    window.history.replaceState(
                        null,
                        "",
                        window.location.pathname,
                    ); // 去掉 #
                    break;
                case "WhatIsInsyra":
                    currentPage.value = WhatIsInsyra;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                case "Features":
                    currentPage.value = Features;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                case "HowToUse":
                    currentPage.value = HowToUse;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                case "Idensyra":
                    currentPage.value = Idensyra;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                case "WhyInsyra":
                    currentPage.value = WhyInsyra;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                case "Contact":
                    currentPage.value = Contact;
                    window.history.replaceState(null, "", `#${page}`); // 更新 URL
                    break;
                default:
                    currentPage.value = Main; // 預設為主頁
                    window.history.replaceState(
                        null,
                        "",
                        window.location.pathname,
                    ); // 去掉 #
            }
            updateTitle(page || "Main");
        };

        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            selectPage(hash || "Main"); // 根據 hash 切換組件
            window.scrollTo(0, 0);
        };

        onMounted(() => {
            // 如果使用者直接以 hash (例如 https://example.com/#Features) 進來，
            // 轉為伺服器可接受的路由 /p/:page?lang=...，讓伺服器可以回傳包含正確 title/h1/h2 的 HTML。
            const rawHash = window.location.hash.replace("#", "");
            if (rawHash) {
                // 使用目前的語言參數（若無則 fallback 為 English）
                const langParam = encodeURIComponent(
                    currentLanguage.value || "English",
                );
                const pageParam = encodeURIComponent(rawHash || "Main");
                // 用 replace 以避免新增多一個 history entry；此操作會導到後端路由並重新載入頁面
                window.location.replace(`/p/${pageParam}?lang=${langParam}`);
                return; // 已重導，停止後續 client-side 初始化
            }

            // 設置初始標題（帶入年份）
            const initialPage = window.location.hash.replace("#", "") || "Main";
            updateTitle(initialPage);

            handleHashChange(); // 初始化時根據 hash 切換組件
            window.addEventListener("hashchange", handleHashChange); // 監聽 hash 變化
        });

        return {
            currentMessages,
            currentLanguage,
            updateLanguage,
            currentPage,
            selectPage,
        };
    },
};
</script>

<style scoped>
.main-content {
    background-color: #f4f4f4;
    /* padding-bottom: 200px; */
}

/* Footer */
.footer {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0px 60px;
    padding-bottom: 30px;
    margin-top: 0px;
    background-color: #000;
    color: #fff;
}

.social-links {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.social-links li a {
    color: #fff;
    text-decoration: none;
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
        padding: 20px 0px;
        padding-bottom: 30px;
    }
}
</style>

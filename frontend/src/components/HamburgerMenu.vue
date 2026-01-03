<template>
    <div class="hamburger-menu">
        <div class="hamburger" @click="toggleMenu">
            <div :class="['bar', { active: isOpen }]"></div>
            <div :class="['bar', { active: isOpen }]"></div>
            <div :class="['bar', { active: isOpen }]"></div>
        </div>
        <div v-if="isOpen" class="menu">
            <LanguageSelector
                @language-changed="selectLanguage"
                :current-language="currentLanguage"
            />
            <ul>
                <li>
                    <a @click="selectPage('Main')">{{
                        currentMessages.navbar.main
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('WhatIsInsyra')">{{
                        currentMessages.navbar.whatIsInsyra
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('Features')">{{
                        currentMessages.navbar.features
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('HowToUse')">{{
                        currentMessages.navbar.howToUse
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('Idensyra')">{{
                        currentMessages.navbar.idensyra
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('WhyInsyra')">{{
                        currentMessages.navbar.whyInsyra
                    }}</a>
                </li>
                <li>
                    <a @click="selectPage('Contact')">{{
                        currentMessages.navbar.contact
                    }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";
export default {
    components: {
        LanguageSelector,
    },
    props: {
        currentMessages: {
            type: Object,
            required: true,
        },

        currentLanguage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        selectLanguage(lang) {
            this.$emit("language-changed", lang);
            localStorage.setItem("language", lang);
            this.toggleMenu();
        },
        selectPage(page) {
            window.location.href = `#${page}`;
            this.toggleMenu();
        },
    },
};
</script>

<style scoped>
a {
    cursor: pointer;
}

.hamburger-menu {
    display: none;
}

.hamburger {
    cursor: pointer;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
}

.bar {
    height: 4px;
    width: 100%;
    background-color: #d2d2d2;
    transition: all 0.3s ease;
}

.bar.active:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.bar.active:nth-child(2) {
    opacity: 0;
}

.bar.active:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
    position: absolute;
    top: 70px; /* 根據需要調整 */
    right: 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: block; /* 確保菜單顯示 */
    z-index: 2;
}

.menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    padding: 10px 20px;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 1.2rem;
}

@media (max-width: 1100px) {
    .hamburger-menu {
        display: block;
    }
    .hamburger {
        display: flex;
    }
}
</style>

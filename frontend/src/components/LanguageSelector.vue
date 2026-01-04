<template>
    <div class="language-selector">
        <div class="select-wrapper">
            <i class="fa fa-globe select-icon"></i>
            <select
                v-model="value"
                class="language-select"
                @change="emitLanguageChange($event.target.value)"
            >
                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.label }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
    props: {
        currentLanguage: {
            type: String,
            required: false,
            default: null,
        },
    },
    emits: ["language-changed"],
    setup(props, { emit }) {
        const initials = ["繁體中文", "English"];
        const storedLanguage = localStorage.getItem("language");
        const initial = props.currentLanguage || storedLanguage || initials[0];

        const value = ref(initial);
        // keep local select in sync if parent updates the prop
        watch(
            () => props.currentLanguage,
            (newVal) => {
                if (newVal) {
                    value.value = newVal;
                }
            },
        );

        const options = initials.map((lang) => ({
            value: lang,
            label: lang,
        }));

        // emit event instead of reloading the page; still persist selection
        const emitLanguageChange = (lang) => {
            localStorage.setItem("language", lang);
            emit("language-changed", lang);
        };

        return {
            value,
            options,
            emitLanguageChange,
        };
    },
};
</script>

<style scoped>
.select-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
}

.select-icon {
    position: absolute;
    left: 10px;
    color: #606266;
    z-index: 1;
}

.language-select {
    width: 240px;
    padding: 8px;
    padding-left: 35px;
    font-size: 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
}

.language-select:focus {
    outline: none;
    border-color: #409eff;
}

.language-select option {
    padding: 8px;
}
</style>

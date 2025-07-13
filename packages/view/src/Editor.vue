<template>
    <div class="editor" ref="editorRef">
    </div>
</template>

<script lang="ts" setup>
import { editor } from "monaco-editor";
import { onMounted, shallowRef } from "vue";

const editorRef = shallowRef<HTMLDivElement>();

onMounted(() => {
    editor.create(editorRef.value!, {})
});

</script>
<style scoped>
.editor {
    width: 100%;
    height: 100%;
}
</style>
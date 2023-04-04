<script setup lang="ts">
import { displayRenamedPDF } from '../utils/file';

defineProps<{ msg: string }>()

const onFileChange = (e: any) => {
   const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e: any) {
      const blob = new Blob([new Uint8Array(e.target.result)], {type: file.type });
      displayRenamedPDF(blob, 'myPdf.pdf').then(console.log);
  };
  reader.readAsArrayBuffer(file);
}
</script>

<template>
  <h1>VitePWA</h1>
  <input type="file" active="application/pdf" @change="onFileChange">
</template>
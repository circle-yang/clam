<!--
 * @Description: 
 * @Author: yanghuan
 * @Date: 2022-09-27 15:58:37
 * @LastEditTime: 2022-09-27 16:30:14
 * @Last Modified by: yanghuan
 * @packageDocumentation: 
 * @module: 
 * @category: 
-->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const errorType = "404";

    return {
      errorType,
    };
  },
});
</script>

<template>
  <div class="error-page">{{ errorType }}</div>
</template>

<style scoped lang="scss">
.error-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>

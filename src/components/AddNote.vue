<template>
    <div>
        <div class="container">
            <label>Write me a note</label>
            <input type="text" v-model="note"/>
            <button @click="submitNote()"></button>
        </div>
    </div>
</template>

<script>
import { namesRef } from 'firebase';
export default {
    data() {
        return {
            note: 'This is just a sentence. There is no spoon.'
        }
    },
    methods: {
        submitNote() {
            namesRef.push({note: this.note, edit: false})
        }
    }
}
</script>
<style lang="scss">

#app {
    .container {
        width: auto;
        margin: 0 auto;
    }
}

</style>
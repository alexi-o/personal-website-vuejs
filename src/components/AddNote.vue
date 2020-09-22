<template>
    <div>
        <form class="card p-2">
            <div class="input-group">
            <input type="text" class="form-control" v-model="note" />
            <div class="input-group-append">
                <button @click="submitNote()" class="btn btn-secondary">Redeem</button>
            </div>
            </div>
        </form>
        <li v-for="note in notesRef" :key="note">{{ note }}</li>
        </div>
    </div>
</template>

<script>
import { notesRef } from '../../firebase';

export default {
    name: 'AddNote',
    data() {
        return {
            note: 'There is no spoon.'
        }
    },
    methods: {
        submitNote() {
            notesRef.push({ note: this.note })
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
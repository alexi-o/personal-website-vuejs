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
        <ul>
            <li v-for="note in loadNotes" 
            v-bind:key="note['.key']">{{note}}</li>
        </ul>
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
    computed: {
        loadNotes() {
            return notesRef
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
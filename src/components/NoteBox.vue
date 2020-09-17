<template>
    <body class="container">

     <AddNote />

      <ul class="list-group mb-3">

        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Username</h6>
            <small class="text-muted">Brief description</small>
          </div>
        </li>
      </ul>
    </body>
</template>
<script>
import AddNote from './AddNote.vue'
export default {
    name: 'Notebox',
    components: { AddNote }
}
</script>
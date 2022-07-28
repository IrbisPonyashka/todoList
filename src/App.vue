<template>
  <div class="wrapper">
    <Navbar/>
    <Notes 
    :notes="notes"
    @delItem="delItem"
    />
    <Modal
      :currentId="currentId"
      v-show="modalOpen"
      @closeModal="modalOpen = false"
      @addNote="addNote"
    />
    <button class="add__btn" @click="modalOpen = true">
      <img src="@/assets/img/edit.svg" alt="">
    </button>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Notes from '@/components/Notes.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Navbar,
    Notes,
    Modal
  },
  data() {
    return {
      currentId: 1,
      modalOpen: false,
      notes: []
    }
  },
  methods: {
    addNote(note) {
      this.notes.push(note)
      this.modalOpen = false
    },
    delItem(id){
      const index = this.notes.findIndex(item => item.id == id)
      this.notes.splice(index,1)
    }
  }
}
</script>

<style>

</style>

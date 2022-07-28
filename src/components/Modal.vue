<template>
  <Transition name="modal">
    <div class="modal" @click="closeModal">
      <div class="modal__block" @click.stop="">
        <h2 class="modal__block-title">Добавить заметку</h2>
        <div class="modal__block-inputs">
          <label>
            <span>Title</span>
            <input v-model="title" type="text" />
          </label>
          <label>
            <span>Content</span>
            <textarea v-model="descr"></textarea>
          </label>
        </div>
        <div class="modal__block-btns">
          <button class="modal__block-btn cancel" @click="closeModal">
            Отмена
          </button>
          <button class="modal__block-btn add" @click="addNote">Добавить</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      descr: "",
      id: this.currentId
    };
  },
  props: {
    currentId: Number
  },
  methods: {
    closeModal() {
      this.title = this.descr = "";
      this.$emit("closeModal");
    },
    addNote() {
        if(this.title != '' && this.descr != '') {
            const note = {
                id: this.id++,
                title: this.title,
                descr: this.descr,
                date: new Date().toLocaleDateString()
            }
            this.$emit('addNote', note)
            this.title = this.descr = ''
        }
    }
  },
};
</script>

<style>
</style>
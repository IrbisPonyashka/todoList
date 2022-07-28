<template>
  <div class="notes__item">
    <div class="notes__item-top" :class="{ between: !grid}">
        <h3 class="notes__item-title">{{ note.title }}</h3>
        <p class="notes__item-date">{{ note.date }}</p>
    </div>
    <p class="notes__item-descr">{{ note.descr }}</p>
    <div class="notes__item-btns">
        <button class="notes__item-btn edit">
            <img src="@/assets/img/edit.svg" alt="">
            <span>РЕДАКТИРОВАТЬ</span>
        </button>
        <button class="notes__item-btn del" @click="delItem">
            <img src="@/assets/img/del.svg" alt="">
            <span>Удалить</span>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        grid: Boolean,
        note: Object
    },
    methods:{
        delItem(){
            this.$emit("delItem",this.note.id);
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="notes">
        <div class="container">
            <div class="notes__top">
                <h2 class="notes__top-title">
                   {{ notes.length > 0 ? 'Все заметки' : 'Нет заметок' }}
                </h2>
                <button class="notes__top-btn" @click="grid = !grid">
                    <img src="@/assets/img/list.svg" alt="" v-show="grid">
                    <img src="@/assets/img/grid.svg" alt="" v-show="!grid">
                    <span>
                        {{ grid ? 'Список' : 'Сетка' }}
                    </span>
                </button>
            </div>
            <div class="notes__list" :class="{active: !grid}">
                <NotesItem 
                    :grid="grid"
                    v-for="note in notes"
                    :key="note.id"
                    :note="note"
                    @delItem="delItem"
                />
            </div>
        </div>
    </div>
</template>

<script>

import NotesItem from '@/components/NotesItem.vue';


export default {
    components: {
      NotesItem  
    },
    props: {
      notes: Array  
    },
    data() {
        return {
            grid: true
        }
    },
    methods:{
        delItem(id){
            this.$emit("delItem",id)
        }
    }
}
</script>

<style>

</style>
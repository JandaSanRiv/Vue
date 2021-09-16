<template>
  <div class="container">
    <h2>Shopping list</h2>
    <div class="user-input">
      <input
        v-model="txtItem"
        placeholder="Press enter to add new item"
        ref="cajaItem"
      />
      <button @click="addItem()">Add item</button>
    </div>
    <ul id="ulList">
      <li v-for="(item, idx) in list" :key="idx" class="item">
        {{ item }}
        <button class="button--remove" @click="deleteItem(idx, item)"
          >Remove</button
        >
      </li>
    </ul>
    <div class="divFooter">
      <button
        v-if="list.length > 1"
        class="button--delete"
        @click="deleteItem()"
        >Delete All</button
      >
    </div>

    <div v-if="errors.length > 0" class="divErrors">
      <ul class="ulErrors">
        <li v-for="(error, idx) in errors" :key="idx" class="error">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txtItem: '',
      list: [],
      errors: [],
      displayBtnDelete: false,
    }
  },
  methods: {
    addItem() {
      this.errors = []
      if (this.txtItem !== '') {
        this.list.push(this.txtItem)
        this.txtItem = ''
        this.$refs.cajaItem.focus
      } else {
        this.errors.push('El campo de item no debe estar vacio')
      }
    },
    deleteAllItems() {
      this.list = []
    },
    deleteItem(idx, value) {
      if (idx >= 0) {
        if (
          confirm(
            `Desea eliminar el elemento "${value} en la posicion ${idx}" ?`
          )
        ) {
          // this.list = ( idx>=0 ? this.list.filter((item, i) => i !== idx): []) //ejemplo d epoeracion ternaria
          this.list = this.list.filter((item, i) => i !== idx)
        }
      } else {
        if (confirm(`Desea eliminar todos los elementos?`)) {
          this.list = []
        }
      }
    },
  },
}
</script>

<style lang="scss">
@import 'styles/global';

$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

// Type
.h2 {
  font-size: 21px;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

// Buttons
button {
  appearance: none;
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  > li {
    color: $color-grey;
    margin-bottom: 4px;
  }
}

div.divErrors {
  border: 1px solid #fffaf5;
  background-color: #fff7f2;
}

ul.ulErrors {
  > li.error {
    color: rgb(199, 23, 23);
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>

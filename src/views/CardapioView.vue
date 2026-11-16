<script setup>
import CardLanche from '@/components/CardLanche.vue'
import { ref } from 'vue'
import { lanches } from '@/data/lanches.js'

const avisoAdicionado = ref('')
let timer = null

function adicionarAoCarrinho(lanche) {
  totalItens.value++
  avisoAdicionado.value = `${lanche.nome} adicionado ao carrinho!` // concatenar utiliza acento grave `
  clearTimeout(timer)
  timer = setTimeout(() => ( //funcao do proprio javascript serve para dar uma pausa, se for chamado de novo enquanto um roda ele inicia novamente e exclui o antigo
    avisoAdicionado.value = ''
), 2000)
}
</script>

<template>
    <div>
        <h1 class="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-100">Cardápio</h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">Escolha seu lanche e faça seu pedido sem pegar fila 😉</p>

      <p v-if="avisoAdicionado" class="mb-4 rounded-x1 bg-green-100 px-4 py-3 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
        ✅ {{ avisoAdicionado }}
      </p>
      <!-- Grade responsiva: 1 coluna no celular, 2 no tablet, 3 no notebook, 4 em telas grandes -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardLanche
        v-for="lanche in lanches"
        :key="lanche.id" 
        :lanche="lanche"
        @adicionar="adicionarAoCarrinho"
        ></CardLanche> <!-- sempre que usar vfor precisa do :key-->

      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<!-- vbase 3 setup cria codigo base pronto-->
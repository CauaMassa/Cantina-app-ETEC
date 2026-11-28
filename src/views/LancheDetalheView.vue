<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { buscarLanche } from '../data/lanches'

const route = useRoute() // LÊ a rota atual (parâmetros, query...)
const router = useRouter() // NAVEGA (push, back...)

// route.params.id é o pedaço ":id" da URL
const lanche = computed(() => buscarLanche(route.params.id))
</script>

<template>
  <div v-if="lanche" class="mx-auto max-w-xl">
    <button @click="router.back()" class="mb-4 text-escola-600 hover:underline dark:text-escola-400">
      ← Voltar
    </button>

    <div class="rounded-2xl bg-white p-8 text-center shadow-xs dark:bg-gray-800">
      <div class="mb-4 text-8xl">{{ lanche.emoji }}</div>
      <span
        class="rounded-full bg-escola-50 px-3 py-1 text-sm font-semibold text-escola-600 dark:bg-gray-700 dark:text-escola-100">
        {{ lanche.categoria }}
      </span>
      <h1 class="mt-3 text-3xl font-bold text-gray-800 dark:text-gray-100">{{ lanche.nome }}</h1>
      <p class="mt-2 text-gray-500 dark:text-gray-400">{{ lanche.descricao }}</p>
      <p class="mt-4 text-3xl font-bold text-escola-600 dark:text-escola-400">
        R$ {{ lanche.preco.toFixed(2).replace('.', ',') }}
      </p>
      <p v-if="!lanche.disponivel"
        class="mt-6 inline-block rounded-xl bg-gray-200 px-6 py-3 font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
        Esgotado no momento 😢
      </p>
    </div>
  </div>

  <div v-else class="rounded-2xl bg-white p-10 text-center dark:bg-gray-800">
    <p class="text-xl text-gray-600 dark:text-gray-300">Lanche não encontrado.</p>
    <RouterLink to="/" class="mt-4 inline-block text-escola-600 hover:underline">Voltar ao cardápio</RouterLink>
  </div>
</template>

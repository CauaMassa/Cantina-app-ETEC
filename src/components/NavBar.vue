<script setup>
import { ref } from "vue";

const escuro = ref(false);

function alternarTema() {
  escuro.value = !escuro.value;
  document.documentElement.classList.toggle("dark", escuro.value);
}
</script>

<template>
  <header class="sticky top-0 z-10 bg-escola-600 text-white shadow-md">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <RouterLink to="/" class="flex items-center gap-2 text-x1 font=bold">
        🍔<span class="hidden md:inline">Cantina da Escola</span>
      </RouterLink>

      <div class="flex items-center gap-1 sm:gap-2">
        <RouterLink to="/" class="rounded-lg px-3 py-2 transition-colors hover:bg-escola-700" active-class="bg-escola-700 font semibold">
          🍽<span class="hidden sm:inline">Cardápio</span>
        </RouterLink>

        <RouterLink to="/pedidos" class="rounded-lg px-3 py-2 transition-colors hover:bg-escola-700" active-class="bg-escola-700 font semibold">
          📋<span class="hidden sm:inline">Meus pedidos</span>
        </RouterLink>

        <RouterLink to="/carrinho" class="rounded-lg px-3 py-2 transition-colors hover:bg-escola-700" active-class="bg-escola-700 font semibold">
          🛒<span class="hidden sm:inline">Carrinho</span>
        </RouterLink>
        <button @click="alternarTema" class="rounded-lg px-2 py-2 transition-colors hover:bg-escola-700"
          :title="escuro ? 'Modo claro' : 'Modo escuro'">
          {{ escuro ? "☀️" : "🌙" }}
        </button>
      </div>
    </nav>
  </header>
</template>

<template>
  <main class="min-h-[calc(100vh-var(--header-height))]">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div
        class="relative border-b border-gray-200 dark:border-gray-800 py-[50px]"
      >
        <div
          class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)] right-0"
          aria-hidden="true"
        >
          <div
            class="aspect-[1108/632] w-full bg-gradient-to-r from-[rgb(var(--color-primary-DEFAULT))] to-white/20 opacity-20"
            style="
              clip-path: polygon(
                73.6% 51.7%,
                91.7% 11.8%,
                100% 46.4%,
                97.4% 82.2%,
                92.5% 84.9%,
                75.7% 64%,
                55.3% 47.5%,
                46.5% 49.4%,
                45% 62.9%,
                50.3% 87.2%,
                21.3% 64.1%,
                0.1% 100%,
                5.4% 51.1%,
                21.4% 63.9%,
                58.9% 0.2%,
                73.6% 51.7%
              );
            "
          ></div>
        </div>
        <div class="flex flex-col lg:flex-row items-start gap-6">
          <div class="flex-1">
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between"
            >
              <h1
                class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
              >
                Blog
              </h1>
            </div>
            <div class="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Those are examples posts taken from Nuxt.com, they may be outdated
              and not render properly.
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16">
          <MainBlogCard
            v-if="firstPost"
            :title="firstPost.title"
            :category="firstPost.category"
            :description="firstPost.description"
            :date="firstPost.date"
            :author="firstPost.author"
            :image="firstPost.image"
            :alt="firstPost.alt"
            :url="firstPost.url"
          />

          <BlogCard
            v-for="(post, index) in remainingPosts"
            :key="index"
            :title="post.title"
            :category="post.category"
            :description="post.description"
            :date="post.date"
            :author="post.author"
            :image="post.image"
            :alt="post.alt"
            :url="post.url"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFetch } from "#app";
import type { Post } from "~/types/blog";

const { data: posts } = await useFetch<Post[]>("/api/posts");

const firstPost = posts.value ? posts.value[0] : null;
const remainingPosts = posts.value ? posts.value.slice(1) : [];
</script>

<style>
:root {
  --color-primary-DEFAULT: rgb(6, 182, 212);
}
</style>
